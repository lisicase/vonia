// React
import React from 'react';
import { Component } from 'react';
import { useParams } from 'react-router-dom';
// Components
import { StarRating, BathroomRatingsByCategory } from './Ratings';
import BathroomReviews from './Reviews';
import { Divider, RedirectButton } from '../../StyleElements';
import { BathroomActions } from './Actions';
import { BathroomGallery } from './Gallery';
// Icons
import { FaChevronLeft } from "react-icons/fa";
import { BathroomFeatures } from './BathroomFeatures';
// data
import allBuildings from '../../Shared/bathroomData/bathroom-data.json'
import { avgCleanliness, avgPrivacy, avgWellStocked, filterBathroom } from './Ratings';

export default function BathroomPage() {
    let { buildingId, bathroomId } = useParams();
    let bathInfo = filterFloor(buildingId, bathroomId);
    let buildInfo = filterBuilding(buildingId);

    return (
        <div style={{ textAlign: "left" }}>
            <BathroomPageTitle buildingInfo={buildInfo} bathroomInfo={bathInfo}/>
            <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
                <div style={{ width: "5vw" }} />
                <div style={{ width: "90vw" }}>
                    <BathroomActions />
                    <Divider />
                    <BathroomRatingsByCategory bathId={bathroomId} />
                    <Divider />
                    <BathroomGallery />
                    <Divider />
                    <BathroomFeatures buildId={buildingId} bathId={bathroomId} />
                    <Divider />
                    <BathroomReviews bathId={bathroomId} />
                </div>
            </div>
        </div>
    );
}

export function averageBathRating(bathroomId) {
    let bathReviews = filterBathroom(bathroomId);
    let clean = avgCleanliness(bathReviews);
    let priv = avgPrivacy(bathReviews);
    let wellStock = avgWellStocked(bathReviews);
    let avgRating = (clean + priv + wellStock) / 3.0;
    return avgRating;
}

function BathroomPageTitle({buildingInfo, bathroomInfo}) {
    console.log(bathroomInfo.bathroomId);
    let overallRating = averageBathRating(bathroomInfo.bathroom_id);

    return (
        <div style={{ textAlign: "left" }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <RedirectButton redirectTo="/" button={<FaChevronLeft className="bufferedIcon" style={{ height: "1.5rem" }} />} />
                    <h2>{`Floor ${bathroomInfo.level}`}</h2> {/**TODO: replace with actual floor num */}
                </div>
                <StarRating rating={overallRating} size='25' />
            </div>
            <p className="bathroomAddress">
                {`${buildingInfo.properties.name}, ${buildingInfo.properties.address}`}
            </p>
        </div>
    );
}

/**
 * TEMP: filter hardcoded json for the correct bathroom ID
 * @param {String} bathID 
 * @param {String} buildId this might be an int
 * @returns the featurelist of a bathroom, or error if it's not found
 */
function filterFloor(buildId, bathId) {
    let currBath = {};
    allBuildings.features.map((building) => {
        if (building.properties.uid == buildId) {
            building.properties.floors.map((bathroom) => {
                if (bathroom.bathroom_id == bathId) {
                    currBath = bathroom
                }
            })
        }
    })
    return currBath;
}

/**
 * TEMP: filter hardcoded json for the correct bathroom ID
 * @param {String} bathID
 * @param {String} buildId this might be an int
 * @returns the featurelist of a bathroom, or error if it's not found
 */
function filterBuilding(buildId) {
    let currBuild = {};
    allBuildings.features.map((building) => {
        if (building.properties.uid == buildId) {
            currBuild = building;
        }
    })
    return currBuild;
}