//React
import React from 'react';
import { Component } from 'react';
// Icons
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsChevronCompactRight } from "react-icons/bs";

// data
import allBuildings from '../../Shared/bathroomData/bathroom-data.json'

export function BathroomFeatures({ buildId, bathId }) {

    let featureList = filterBathroom(buildId, bathId);
    
    console.log(featureList);

    let allFeatures = Object.keys(featureList).map((key) => {
        if (featureList.key === "Yes") {
            return (<SingleBathroomFeature feature={key} />);
        }
    })
    return (
        <div>
            <h2>Features</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {allFeatures}
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <BsChevronCompactRight size={20} />
                </div>
            </div>
        </div>
    );

}

class SingleBathroomFeature extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '5rem' }}>
                <AiOutlineCheckCircle className="bufferedIcon" size={25} />
                <p>{this.props.feature}</p>
            </div>
        );
    }
}

/**
 * TEMP: filter hardcoded json for the correct bathroom ID
 * @param {String} bathID 
 * @param {String} buildId this might be an int
 * @returns the featurelist of a bathroom, or error if it's not found
 */
function filterBathroom(buildId, bathId) {

    let features = {};

    allBuildings.features.map((building) => {
        console.log(building);
        console.log(`build ID: ${buildId}`);
        console.log(`this build ID: ${building.properties.uid}`);
        if (building.properties.uid === buildId) {
            building.floors.map((bathroom) => {
                console.log(bathroom);
                if (bathroom.bathroom_id === bathId) {
                    features = bathroom.features;
                }
            })
        }
    })

    return features;
}