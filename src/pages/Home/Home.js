// React
import React, { useEffect, useState, useRef } from "react";
// Components
import Button from 'react-bootstrap/Button';
import { BiSearch } from 'react-icons/bi';
import BuildingList from '../../Map/BuildingList.js';
import { RedirectButton } from '../../StyleElements.js';
import { GiHamburgerMenu } from 'react-icons/gi';
import bathrooms from '../../Shared/bathroomData/bathroom-data.json'
import Menu from "../../Menu.js";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import InitMap from "../../Map/Map.js";

export default function HomePage(props) {
    //if (this.props.userId && this.props.userId==="") {
    let menuButton = <RedirectButton redirectTo="/signin" button={<button><GiHamburgerMenu /></button>} />
    if (props.userId!=="") {
        menuButton = <Popup
        trigger={
            <button><GiHamburgerMenu /></button>
        }
        closeOnDocumentClick={true}
    >
        <div>
            <Menu />
        </div>
    </Popup>
    }
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'left' }}>
            {menuButton}
            </div>
            <h1>Spotty</h1>
            <h2>Spot-a-Potty</h2>
            <InitMap />
        </div>
    );
}

function MenuButton() {
    return (
        <RedirectButton redirectTo="/menu" button={<button><GiHamburgerMenu /></button>} />
    );
}
