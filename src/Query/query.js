// npm install @google- loud/firestore
// export GOOGLE_APPLICATION_CREDENTIALS="spotty-a8e30-47e7ceead164.json"
const {Firestore} = require('@google-cloud/firestore');

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

// // Executes and retreives data for a query snapshot
// // Returns data as objects
async function getData(snapshot) {
    if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }  
      
      snapshot.forEach(doc => {
        console.log(doc.data());
      });
}

// Returns all bathrooms in the collection and their data as objects
async function allBathrooms() {
    const snapshot = await bathRef.get();

    //getData(snapshot);

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

// Given a building name, return its hours as an object
async function buildingHours(buildingName) {
    console.log("Building Name:", buildingName);

    const snapshot = await bathRef
    .where('properties.name', '==', buildingName)
    .get()                    
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            const data = doc.data();
            const hours = data.properties.hours;
            console.log(hours);

            return hours;
        });
    })
}

// Adds a user review for a bathroom and returns it
async function addReview(bathroomID, userID, title, content, cleanliness, privacy, wellStocked) {
    uq_string = Math.random().toString(36).slice(2);

    let today = new Date();
    let dd = today.getDate();

    let mm = today.getMonth()+1; 
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    } 

    if (mm < 10)  {
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
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            const data = doc.data();
            console.log(data.favorite);
            allFavs.push(data.favorite);
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

async function removeFavorite() {
    return;
}

async function addFavorite() {
    return;
}

// Returns all the features for a specific bathroom
async function allFeatures() {
    return;
}


//allBathrooms();

//buildingHours('Architecture Hall');

//addReview("mZuOD9HaIa", "ABCDEFGH", "Great Bathroom!", "Very clean and spacious", 5, 5, 5);

//favoritedBathrooms("Gpcx06xPOpYKgUtgXGzSjRq3Q4K3");

addUser("ABCDEFG", "test_user")

// get avg rating for cleanliness, privacy, well-stocked
// get overall rating from the averages above
