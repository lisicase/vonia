// React
import React, { useState } from 'react';
import { Component } from 'react';
import { Navigate } from 'react-router-dom';
// Components
import { ShortDivider } from '../StyleElements';
import BathroomCard, { BuildingInfo } from './BathroomCard';
import { StarRating } from '../Pages/BathroomPage/Ratings';
import Popup from 'reactjs-popup';
// Icons
import { BsChevronDown } from "react-icons/bs";
// Bathroom data
import bathrooms from "../Shared/bathroomData/bathroom-data.json"
// Style
import 'reactjs-popup/dist/index.css';

export default function BuildingList({ updateBuildingDisplayed }) {
    bathrooms.features.forEach(function (bathroom, i) {
        bathroom.properties.id = i;
    });
    return (
        <div className="shadow" style={{ width: "100vw", borderTopLeftRadius: "25px", borderTopRightRadius: "25px", backgroundColor: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <BsChevronDown style={{ marginTop: '0.5rem' }} />
            </div>
            <div>
                {
                    bathrooms.features.map((bathroom) => {
                        const temp = BuildingListItem({ bathroom });
                        console.log(`buildingList: ${bathroom.properties.name}`);
                        return temp;
                    })
                }
            </div>
        </div>
    );
}

export function BuildingListItem(bathroom) {

    const [redirectTo, openBathroomInfo] = useState("");

    if (redirectTo === "bathroomcard") {
        return <Navigate to={"/bathroomcard"} />
    }
    return (
        <div /**onClick={() => { bathroom.handleClick("test") }} */ style={{ textAlign: "left", display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <BuildingInfo
                name={bathroom.bathroom.properties.name}
                location={bathroom.bathroom.properties.address}
                miles={bathroom.bathroom.properties.dist}
                imgSrc={bathroom.bathroom.properties.imgSrc}
            />
        </div>
    );
}
