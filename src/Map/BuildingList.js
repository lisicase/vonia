// React
import React, { useState } from 'react';
import { Component } from 'react';
import { Navigate } from 'react-router-dom';
// Components
import { ShortDivider } from '../StyleElements';
import BathroomCard, { BuildingInfo } from './BathroomPopup';
import { StarRating } from '../Pages/BathroomPage/Ratings';
import Popup from 'reactjs-popup';
// Icons
import { BsChevronDown } from "react-icons/bs";
// Bathroom data
import bathrooms from "../Shared/bathroomData/bathroom-data.json"
// Style
import 'reactjs-popup/dist/index.css';

export default function BuildingList({ flyToStore, createPopup }) {
    bathrooms.features.forEach(function (bathroom, i) {
        bathroom.properties.id = i;
    });

    const onClick = (feature) => {
        createPopup(feature);
        flyToStore(feature);
    };

    return (
        <div className="shadow" style={{ width: "100vw", borderTopLeftRadius: "25px", borderTopRightRadius: "25px", backgroundColor: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <BsChevronDown style={{ marginTop: '0.5rem' }} />
            </div>
            <div>
                {
                    bathrooms.features.map((bathroom) => {
                        return (<BuildingListItem bathroom={bathroom} onClick={onClick} />)
                    })
                }
            </div>
        </div>
    );
}

export function BuildingListItem({ bathroom, onClick }) {

    const [redirectTo, openBathroomInfo] = useState("");

    if (redirectTo === "bathroomcard") {
        return <Navigate to={"/bathroomcard"} />
    }
    return (
        <div id={`listing-${bathroom.properties.id}`} onClick={() => { onClick(bathroom) }} style={{ textAlign: "left", display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <BuildingInfo
                name={bathroom.properties.name}
                location={bathroom.properties.address}
                miles={bathroom.properties.dist}
                imgSrc={bathroom.properties.imgSrc}
            />
        </div>
    );
}
