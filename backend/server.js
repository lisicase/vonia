// PREREQS:
// export GOOGLE_APPLICATION_CREDENTIALS="/mnt/c/Users/kchou/OneDrive/Documents/School/Informatics/Capstone/vonia/backend/spotty-a8e30-47e7ceead164.json"

const express = require('express');
const app = express();
const {allBathrooms, buildingHours, addReview, getBathroomId, getBuildingId, bathroomReviews } = require('./query');
const exBathrooms = require("../src/Shared/bathroomData/bathroom-data.json");

app.use(express.static("public"));

let port = 8080;

app.listen(port);

console.log(`server started on port ${port}`);

app.get('/bathrooms', (req, res) => {
    allBathrooms()
        .then((bathroomList) => {
            console.log(exBathrooms);
            let geo = {
                type: "FeatureCollection",
                features: bathroomList
            }
            console.log(geo);
            res.send(JSON.stringify(geo));
        })
        .catch((error) => {
            console.log(error);
            throw new Error('BATHROOM LIST BROKEN: check logs');
        })
})

app.get('/buildingHours/:buildingName', (req, res) => {
    buildingHours(req.params.buildingName)
        .then((hours) => {
            // the function doesn't currently actually return anything so it's blank
            res.send(JSON.stringify(hours));
        })
        .catch((error) => {
            console.log(error);
            throw new Error('BATHROOM HOURS BROKEN: see logs')
        })
})

app.post('/submitReview', (req, res) => {
    console.log(req);
    let bathroomID = req.body.bathroomID;
    let displayName = req.body.displayName;
    let title = req.body.title;
    let content = req.body.content;
    let cleanliness = req.body.cleanliness;
    let privacy = req.body.privacy;
    let wellStocked = req.body.stock;

    addReview(bathroomID, displayName, title, content, cleanliness, privacy, wellStocked)
        .then((res) => {
            // should eventually navigate to a "review was submitted" page, but I just link it back home for now
            res.redirect(200, '/');
        })
        .catch((err) => {
            //prolly should redirect to an error page
            console.log(err);
        })
})

/**
 * Returns bathroom id given a building's id and the floor num
 */
app.get('/bathroomID/:buildingID/:floor', (req, res) => {
    getBathroomId(req.params.buildingID, req.params.floor)
        .then((id) => {
           console.log(id);
           res.send({bathroomID: id});
        })
        .catch((err) => {
            console.log(err);
        })
})

/**
 * Returns building id given a building's name
 */
app.get('/buildingID/:buildingName', (req, res) => {
    getBuildingId(req.params.buildingName)
        .then((id) => {
           console.log(id);
           res.send({buildingId: id});
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/reviews/:bathroomId', (req, res) => {
    bathroomReviews(req.params.bathroomId)
        .then((reviews) => {
            res.send(JSON.stringify(reviews));
        })
        .catch((err) => {
            console.log(err);
        })
})