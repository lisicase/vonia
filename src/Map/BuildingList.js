// React
import React, { useEffect, useState } from 'react';
import { Component } from 'react';
import { Navigate } from 'react-router-dom';
// Components
import { ShortDivider } from '../StyleElements';
import { BuildingInfo } from './BathroomPopup';
import { StarRating } from '../Pages/BathroomPage/Ratings';
import Popup from 'reactjs-popup';
// Icons
import { BsChevronDown } from "react-icons/bs";
// Bathroom data
import allBuildings from "../Shared/bathroomData/bathroom-data.json"
// Style
import 'reactjs-popup/dist/index.css';
// Helper Function
import { checkStatus } from '../Shared/HelperFunction/HelperFunctions';
import { averageBathRating } from '../Pages/BathroomPage/BathroomPage';

export default function BuildingList({ flyToStore, createPopup }) {

    // const [ newbathrooms, updateList ] = useState('');

    // useEffect(() => {
    //     fetch('/bathrooms')
    //         .then(checkStatus)
    //         .then(res => res.json())
    //         .then((res) => {
    //             updateList(res);
    //         })
    //         .catch((err) => console.log(err));
    // })

    allBuildings.features.forEach(function (building, i) {
            building.properties.id = i;
        });

        const onClick = (feature) => {
            createPopup(feature);
            flyToStore(feature);
        };

        return (
            <div className="shadow" style={{ width: "100vw", borderTopLeftRadius: "25px", borderTopRightRadius: "25px", backgroundColor: 'white', paddingLeft:'1rem', paddingRight:'1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <BsChevronDown style={{marginTop: '0.5rem', marginBottom:'0.5rem'}} />
                </div>
                <div>
                    {
                        allBuildings.features.map((building) => {
                            return (<BuildingListItem building={building} onClick={onClick} />)
                        })
                    }
                </div>
            </div>
        );
}

export function BuildingListItem({ building, onClick }) {

    const [redirectTo, openBathroomInfo] = useState("");

    if (redirectTo === "bathroomcard") {
        return <Navigate to={"/bathroomcard"} />
    }

    let highestRating = getBldgHighestRating(building);
    
    return (
        <div id={`listing-${building.properties.id}`} onClick={() => { onClick(building) }} style={{textAlign:'left'}}>
            <BuildingInfo
                name={building.properties.name}
                location={building.properties.address}
                miles={building.properties.dist}
                imgSrc={building.properties.imgSrc}
                rating={highestRating}
            />
        </div>
    );
}

function getBldgHighestRating(buildingInfo) {
    let floorRatingsList = [];
    buildingInfo.properties.floors.map((floor) => {
        const id = floor.bathroom_id;
        let floorRating = averageBathRating(id);
        floorRatingsList.push(floorRating);
    })
    let buildingHighestRating = getMaxFromList(floorRatingsList);
    return buildingHighestRating;
}

function getMaxFromList(list) {
    let max = 0;
    list.forEach(num => {
        if (num > max) {
            max = num;
        }
    });
    return max;
}