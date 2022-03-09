import React, { useEffect, useState, useRef } from "react";
import { RedirectButton } from '../../StyleElements.js';
import { GiHamburgerMenu } from 'react-icons/gi';
import InitMap from "../../Map/Map.js";

export default function HomePage() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'left' }}>
                <MenuButton />
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
