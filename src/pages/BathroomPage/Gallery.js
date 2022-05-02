// React
import React, { Component } from 'react';
// Icons
import { BsChevronCompactRight } from "react-icons/bs";

export class BathroomGallery extends Component {
    render() {
        return (
            <div>
                <h2>Gallery</h2>
                <div style={{ display: 'flex', height: "10rem", marginTop:"2rem", marginBottom:"1rem" }}>
                    <img src="temp-imgs/bathrooms/br1.png" className="bufferedIcon shadow" />
                    <img src="temp-imgs/bathrooms/br2.png" className="bufferedIcon shadow" />
                    <img src="temp-imgs/bathrooms/br3.png" className="bufferedIcon shadow" />
                    <div style={{display:'flex', alignItems:'center'}}>
                        <BsChevronCompactRight size={20} />
                    </div>
                </div>
            </div>
        );
    }
}
