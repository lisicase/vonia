// React
import React, { useEffect, useState, useRef } from "react";
// Components
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
        <div style={{backgroundColor:'#dae1e3'}}>
            <div style={{display:'flex', backgroundColor:'white', paddingTop:'0.5rem', justifyContent:'space-between'}}>
                <div style={{display:'flex', justifyContent:'left', paddingLeft:'0.5rem', paddingRight:'0.5rem'}}>
                    {menuButton}
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    {/*<img src="favicon.ico" style={{height:'1.5rem', paddingRight:'0.5rem'}} />*/}
                    <h5>spotty</h5>
                </div>
                <div style={{opacity:'0'}}><GiHamburgerMenu /></div>
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
