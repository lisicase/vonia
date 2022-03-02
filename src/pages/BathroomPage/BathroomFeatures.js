//React
import React from 'react';
import { Component } from 'react';
// Icons
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsChevronCompactRight } from "react-icons/bs";

export class BathroomFeatures extends Component {
    render() {
        return (
            <div>
                <h2>Features</h2>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        <SingleBathroomFeature feature="Tall Stalls" />
                        <SingleBathroomFeature feature="Paper Towels" />
                        <SingleBathroomFeature feature="Auto Flush" />
                        <SingleBathroomFeature feature="Hand Dryer" />
                    </div>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <BsChevronCompactRight size={20} />
                    </div>
                </div>
            </div>
        );
    }
}

class SingleBathroomFeature extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '5rem' }}>
                <AiOutlineCheckCircle className="bufferedIcon" size={25} />
                <p>{this.props.feature}</p>
            </div>
        );
    }
}
