//React
import React, { useState } from 'react';
// Icons
import { FiShare2, FiMap } from "react-icons/fi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { VscHeart } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';

export function BathroomActions() {

    const nav = useNavigate();

    const clickHandler = () => {
        //https://www.google.com/maps/search/?api=1&query=Architecture+Hall%2CSeattle%2CWA
        console.log("direction click working");
        window.open('https://www.google.com/maps/search/?api=1&query=Architecture+Hall%2CSeattle%2CWA');
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <ActionWithTitle clickHandler={clickHandler} icon={<BsMap size={30} />} title="Directions" />
            <ActionWithTitle icon={<VscHeart size={30} />} title="Favorite" />
            <ActionWithTitle icon={<HiOutlinePencilAlt size={30} />} title="Review" />
            <ActionWithTitle icon={<FiShare2 size={30} />} title="Share" />
        </div>
    );
}

function ActionWithTitle({ icon, title, clickHandler }) {

    return (
        <div onClick={clickHandler} className="textCenter" >
            <div className="actionBtn">
                {icon}
            </div>
            <p>{title}</p>
        </div>
    );

}
