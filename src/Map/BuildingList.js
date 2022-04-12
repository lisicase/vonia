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
<<<<<<< HEAD
                <BuildingListItem name="Chemistry Building" handleClick={this.props.updateBuildingDisplayed} location="Rainier Vista" miles="0.1" imgSrc="temp-imgs/buildings/CHB.png" rating={4.6} />
                <BuildingListItem name="Physics/Astronomy Auditorium" location="3910 15th Ave NE" miles="0.1" imgSrc="temp-imgs/buildings/PAA.png" rating={4.3} />
                <BuildingListItem name="Husky Union Bldg" location="4001 E Stevens Way NE" miles="0.3" imgSrc="temp-imgs/buildings/HUB.jpg" rating={3.1} />
                <BuildingListItem name="Mary Gates Hall" location="1851 NE Grant Ln" miles="0.3" imgSrc="temp-imgs/buildings/MGH.jpg" rating={3.6} />
                <BuildingListItem name="Alder Hall" location="1315 NE Campus Pkwy" miles="0.4" imgSrc="temp-imgs/buildings/HFS-Alder.jpg" rating={4.9} />
                <BuildingListItem name="Hans Rosling Center" location="Guthrie Annex 3 (GA3)" miles="0.4" imgSrc="temp-imgs/buildings/HRC.jpg" rating={4.6} />
                <BuildingListItem name="Suzzalo Library" location="4000 15th Ave NE" miles="0.5" imgSrc="temp-imgs/buildings/SUZ.jpg" rating={3.1} />
=======
                {
                    bathrooms.features.map((bathroom) => {
                        return (<BuildingListItem bathroom={bathroom} onClick={onClick} />)
                    })
                }
>>>>>>> mapInteraction
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
