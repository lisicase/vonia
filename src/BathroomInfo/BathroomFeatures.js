//React
import React from 'react';
import { Component } from 'react';
// Icons
import { AiOutlineCheckCircle } from "react-icons/ai";
// Style
import "./BathroomInfo.css";

export class BathroomFeatures extends Component {
    render() {
        return (
            <div>
                <h2>Features</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <SingleBathroomFeature feature="Tall Stalls" />
                    <SingleBathroomFeature feature="Paper Towels" />
                    <SingleBathroomFeature feature="Auto Flush" />
                    <SingleBathroomFeature feature="Hand Dryer" />
                </div>
            </div>
        );
    }
}

class SingleBathroomFeature extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '5rem' }}>
                <AiOutlineCheckCircle className="bufferedIcon" />
                <p>{this.props.feature}</p>
            </div>
        );
    }
}
