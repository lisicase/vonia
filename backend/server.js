// PREREQS:
// export GOOGLE_APPLICATION_CREDENTIALS="/mnt/c/Users/kchou/OneDrive/Documents/School/Informatics/Capstone/vonia/backend/spotty-a8e30-47e7ceead164.json"

const express = require('express');
const app = express();
const {allBathrooms, buildingHours, addReview, getBathroomId } = require('./query');
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
    let bathroomID = req.body.bathroomID; //need a query for this
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

app.get('/bathroomID/:buildingName/:floor', (req, res) => {
    getBathroomId(req.params.buildingName, req.params.floor)
        .then((id) => {
           console.log(id);
           res.send({bathroomID: id});
        })
        .catch((err) => {
            console.log(err);
        })
})