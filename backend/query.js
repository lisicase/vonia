// npm install @google-cloud/firestore
// export GOOGLE_APPLICATION_CREDENTIALS="spotty-a8e30-47e7ceead164.json"
const { Firestore } = require('@google-cloud/firestore');

// Create a new client
const db = new Firestore();

// Create a reference to the features collection
const bathRef = db.collection('features');

// Create a reference to the reviews collection
const reviewRef = db.collection('reviews');

// Create a reference to the user_favorites collection
const userFavRef = db.collection('user_favorites');

// Create a reference to the users collection
const userRef = db.collection('users');

// Returns all bathrooms in the collection and their data as objects
async function allBathrooms() {
    const snapshot = await bathRef.get();

    if (snapshot.empty) {
        console.log('No matching documents.');
        return;
    }

    allBaths = [];

    snapshot.forEach(doc => {
        console.log(doc.data());
        allBaths.push(doc.data());
    });

    return allBaths;
}

// Given a building id, return its hours as an object
async function buildingHours(buildingID) {
    const snapshot = await bathRef
        .where('properties.uid', '==', buildingID)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                const data = doc.data();
                const hours = data.properties.hours;
                console.log(hours);

                return hours;
            });
        })
}

/**
 * Adds a user review for a bathroom and returns it
 * @param {*} bathroomID 
 * @param {*} userID 
 * @param {*} title 
 * @param {*} content 
 * @param {*} cleanliness 
 * @param {*} privacy 
 * @param {*} wellStocked 
 * @returns 
 */
async function addReview(bathroomID, userID, title, content, cleanliness, privacy, wellStocked) {
    uq_string = Math.random().toString(36).slice(2);

    let today = new Date();
    let dd = today.getDate();

    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = mm + '-' + dd + '-' + yyyy;

    const res = await reviewRef.add({
        review_id: uq_string,
        user_id: userID,
        bathroom_id: bathroomID,
        date: today,
        title: title,
        content: content,
        cleanliness: cleanliness,
        privacy: privacy,
        "well-stocked": wellStocked
    });

    return res;
}

// Returns all the favorited bathroom ID for a user as an array
async function favoritedBathrooms(userID) {
    allFavs = [];

    const snapshot = await userFavRef
        .where('user_id', '==', userID)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                const data = doc.data();
                console.log(data.bathroom_id);
                allFavs.push(data.bathroom_id);
            });
        })
    console.log(allFavs);

    return allFavs;
}

// Adds a user to the users collection
async function addUser(userID, displayName) {
    const res = await userRef.add({
        user_id: userID,
        display_name: displayName
    });

    return res;
}

// Adds a favorited bathroom to the user_favorites collection
async function addFavorite(userID, bathroomID) {
    const res = await userFavRef.add({
        user_id: userID,
        bathroom_id: bathroomID
    });

    return res;
}

// Removes a favorited bathroom from the user_favorites collection
async function removeFavorite(userID, bathroomID) {
    const snapshot = await userFavRef
        .where('user_id', '==', userID)
        .where('bathroom_id', '==', bathroomID)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                const del = doc.ref.delete();
                console.log(del)
                return del;
            });
        });

    return;
}

// Returns the average rating for cleanliness for a bathroom
async function avgCleanliness(bathroomID) {
    sum = 0;
    num = 0;

    const snapshot = await reviewRef
        .where('bathroom_id', '==', bathroomID)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                const data = doc.data();
                console.log("cleanliness:", data.cleanliness);
                sum += data.cleanliness;
                num += 1;
            });
        })

    let avg = sum / num;
    avg = Math.round(avg / 0.5) * 0.5 // round to nearest 0.5

    console.log(avg);

    return avg;
}

// Returns the average rating for privacy for a bathroom
async function avgPrivacy(bathroomID) {
    sum = 0;
    num = 0;

    const snapshot = await reviewRef
        .where('bathroom_id', '==', bathroomID)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                const data = doc.data();
                console.log("privacy:", data.privacy);
                sum += data.privacy;
                num += 1;
            });
        })

    let avg = sum / num;
    avg = Math.round(avg / 0.5) * 0.5 // round to nearest 0.5

    console.log(avg);

    return avg;
}

// Returns the well-stock rating for privacy for a bathroom
async function avgWellStocked(bathroomID) {
    sum = 0;
    num = 0;

    const snapshot = await reviewRef
        .where('bathroom_id', '==', bathroomID)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                const data = doc.data();
                console.log("well-stocked:", data["well-stocked"]);
                sum += data["well-stocked"];
                num += 1;
            });
        })

    let avg = sum / num;
    avg = Math.round(avg / 0.5) * 0.5 // round to nearest 0.5

    console.log(avg);

    return avg;
}

// Returns overall rating from the averages to display for each bathroom floor on popup
async function overallRating(bathroomID) {
    let sum = await (avgCleanliness(bathroomID) + avgPrivacy(bathroomID) + avgWellStocked(bathroomID)) / 3;
    avg = Math.round(sum / 0.5) * 0.5;

    console.log(avg);

    return avg;
}

// Returns the average for a user review to display on reviews page
async function avgUserReviewRating(reviewID) {
    sum = 0;

    const snapshot = await reviewRef
        .where('review_id', '==', reviewID)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                const data = doc.data();
                sum = data.cleanliness + data.privacy + data['well-stocked'];
            });
        })

    let avg = sum / 3;
    avg = Math.round(avg / 0.5) * 0.5 // round to nearest 0.5

    console.log(avg);

    return avg;
}

// Returns all the features for a specific bathroom given a building id
// and a bathroom ID for a bathroom inside it
async function allFeatures(buildingID, bathroomID) {
    const snapshot = await bathRef
        .where('properties.uid', '==', buildingID)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                const data = doc.data();
                const floors = data.properties.floors;

                for (const currFloor in floors) {
                    if (floors[currFloor].bathroom_id == bathroomID) {
                        let features = floors[currFloor].features
                        console.log(floors[currFloor].bathroom_id);
                        console.log(features);
                        return features;
                    }
                }
            });
        })

    return;
}

// Given filters and a minimum rating, return a list of building and floors within that building that match it
async function filter(filteredFeatures, minRating) {
    let baths = [];

    const snapshot = await bathRef
        .where('properties.country', '==', 'United States')
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                const data = doc.data();

                const floors = data.properties.floors;

                for (const currFloor in floors) {
                    let match = true;

                    let features = floors[currFloor].features
                    if (floors[currFloor].rating >= minRating) {
                        for (const currFeature in features) {
                            let feat = features[currFeature];

                            for (const keyFilteredFeature in filteredFeatures) {
                                if (feat[keyFilteredFeature] != filteredFeatures[keyFilteredFeature]) {
                                    match = false;
                                }
                            }
                        }

                        if (match == true) {
                            baths.push(data);
                        }
                    }
                }
            });
        })

    console.log(baths);

    return baths;
}

// Given a building id, returns the highest rating among all its floors
async function highestRatedBathroom(buildingID) {
    let hiRating = 0;

    const snapshot = await bathRef
        .where('properties.uid', '==', buildingID)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                const data = doc.data();
                const floors = data.properties.floors;

                for (const currFloor in floors) {
                    currRating = floors[currFloor].rating;
                    if (currRating > hiRating) {
                        hiRating = currRating;
                    }
                }
            });
        })

    console.log(hiRating);

    return hiRating;
}

/**
 * Given a building id and floor level, return bathroom id
 * @param {String} buildingID 
 * @param {Integer} floorLevel 
 * @returns {String}  bathroom's id
 */
async function getBathroomId(buildingID, floorLevel) {
    let id = '';
    const snapshot = await bathRef
        .where('properties.uid', '==', buildingID)
        .get()

    snapshot.forEach(function (doc) {
        const data = doc.data();

        const floors = data.properties.floors;
        for (const currFloor in floors) {
            const objFloor = floors[currFloor];
            if (objFloor.level == floorLevel) {
                bathroom_id = objFloor.bathroom_id;

                console.log(bathroom_id)
                id = bathroom_id;
            }
        }
    });
    return id;
}

// Given a building name, return building id
async function getBuildingId(buildingName) {
    let buildId = '';
    const snapshot = await bathRef
        .where('properties.name', '==', buildingName)
        .get()

    snapshot.forEach(function (doc) {
        const data = doc.data();

        buildId = data.properties.uid;
    });


    return buildId;
}


// Given a bathroom id, return all the bathroom reviews
async function bathroomReviews(bathroomID) {
    let allReviews = [];
    const snapshot = await reviewRef
        .where('bathroom_id', '==', bathroomID)
        .get()

    snapshot.forEach(function (doc) {
        const data = doc.data();
        allReviews.push(data);
    });


    return allReviews;
}

async function allBathroomReviews() {
    let allReviews = [];
    const snapshot = await reviewRef
        .get()

    snapshot.forEach(function (doc) {
        const data = doc.data();
        allReviews.push(data);
    });


    return allReviews;
}

module.exports = {
    allBathrooms,
    bathroomReviews,
    getBathroomId,
    buildingHours,
    addReview,
    getBuildingId,
    allBathroomReviews
}


// Test functions

//allBathrooms();

//buildingHours(1); // Architecture Hall

//addReview("mZuOD9HaIa", "ABCDEFGH", "Great Bathroom!", "Very clean and spacious", 5, 5, 5);

//favoritedBathrooms("Gpcx06xPOpYKgUtgXGzSjRq3Q4K3");

//addUser("ABCDEFG", "test_user");

//addFavorite("Gpcx06xPOpYKgUtgXGzSjRq3Q4K3", "Z3vp7EyCNR");

//removeFavorite("Gpcx06xPOpYKgUtgXGzSjRq3Q4K3", "Z3vp7EyCNR");

//avgCleanliness("mZuOD9HaIa");

//avgPrivacy("mZuOD9HaIa");

//avgWellStocked("mZuOD9HaIa");

//overallRating("mZuOD9HaIa");

//avgUserReviewRating("F7Pt0QAJFc");

//allFeatures("Kane Hall", "zV4aAmP7LR");

// features = {
//     // 'Auto-Flush': 'No',
//     // 'Water Fountain': 'Yes',
//     // 'Changing Station': 'No',
//     'Gender': 'Neutral',
//     // 'Feminine Products': 'No',
//     // 'Tall Stalls': 'No',
//     // 'Parking': 'No',
//     // 'Hot Water Tap': 'Yes',
//     // 'No ID': 'Yes',
//     // 'Free': 'Yes',
//     // 'Towels': 'No',
//     // 'Accessible': 'Yes'
// }

//filter(features, 4);

//highestRatedBathroom(7); // Suz

//getBathroomId(7, 0) // Suz

//bathroomInfo("mZuOD9HaIa");

