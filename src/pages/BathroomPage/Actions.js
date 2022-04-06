//React
import React, { useState } from 'react';
// Icons
import { FiShare2, FiMap } from "react-icons/fi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export function BathroomActions() {
    const [favorited, toggleFavorited] = useState(false);

    let favBtn = <div onClick={() => toggleFavorited(true)}>
                    <ActionWithTitle icon={<FaRegHeart size={30} />} title="Favorite" />
                </div>;
    if (favorited) {
        favBtn = <div onClick={() => toggleFavorited(false)}>
                    <ActionWithTitle icon={<FaHeart size={30} />} title="Favorite" override="purpleRatingSymbol" />
                </div>;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <ActionWithTitle icon={<FiMap size={30} />} title="Directions" />
            {favBtn}
            <ActionWithTitle icon={<HiOutlinePencilAlt size={30} />} title="Review" />
            <ActionWithTitle icon={<FiShare2 size={30} />} title="Share" />
        </div>
    );
}

function ActionWithTitle({icon, title, override="actionBtn"}) {
    let btnClasses = "actionBtn";
    if (override != null) {
        btnClasses = override;
    }
    return (
        <div className="textCenter" >
            <div className={btnClasses}>{icon}</div>
            <p>{title}</p>
        </div>
    );
}
