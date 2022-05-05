import React, { useState } from 'react';
// Icons
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiShare2, FiMap } from "react-icons/fi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

export function BathroomActions() {

    const nav = useNavigate();

    const [favorited, toggleFavorited] = useState(false);

    let favBtn = <div onClick={() => toggleFavorited(true)}>
                    <ActionWithTitle icon={<FaRegHeart size={30} />} title="Favorite" />
                </div>;
    if (favorited) {
        favBtn = <div onClick={() => toggleFavorited(false)}>
                    <ActionWithTitle icon={<FaHeart size={30} className="purpleRatingSymbol" />} title="Favorite" />
                </div>;
    }

    const clickHandler = () => {
        //https://www.google.com/maps/search/?api=1&query=Architecture+Hall%2CSeattle%2CWA
        console.log("direction click working");
        window.open('https://www.google.com/maps/search/?api=1&query=Architecture+Hall%2CSeattle%2CWA');
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <ActionWithTitle clickHandler={clickHandler} icon={<FiMap size={30} />} title="Directions" />
            {favBtn}
            <ActionWithTitle icon={<HiOutlinePencilAlt size={30} />} title="Review" />
            <ActionWithTitle icon={<FiShare2 size={30} />} title="Share" />
        </div>
    );
}

function ActionWithTitle({icon, title, clickHandler}) {

        return (
            <div onClick={clickHandler} className="textCenter" >
                <div className="actionBtn">
                    {icon}
                </div>
                <p>{title}</p>
            </div>
        );
    
}
