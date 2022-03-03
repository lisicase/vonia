// React
import React from 'react';
import { Component } from 'react';
// Components
import { StarRating, BathroomRatingsByCategory } from './Ratings';
import BathroomReviews from './Reviews';
import { Divider, RedirectButton } from '../../StyleElements';
import { BathroomActions } from './Actions';
import { BathroomGallery } from './Gallery';
// Icons
import { FaChevronLeft } from "react-icons/fa";
import { BathroomFeatures } from './BathroomFeatures';

export default class BathroomPage extends Component {
    render() {
      return (
        <div style={{textAlign:"left"}}>
            <BathroomPageTitle/>
            <div style={{display:'flex', flexDirection:'row', alignContent:'center' }}>
                <div style={{width:"5vw"}} />
                <div style={{width:"90vw"}}>
                    <BathroomActions />
                    <Divider />
                    <BathroomRatingsByCategory />
                    <Divider />
                    <BathroomGallery />
                    <Divider />
                    <BathroomFeatures />
                    <Divider />
                    <BathroomReviews />
                </div>
            </div>
        </div>
      );
    }
}

class BathroomPageTitle extends Component {
    render() {
      return (
        <div style={{textAlign:"left"}}>
            <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <div style={{display: 'flex', flexDirection:'row'}}>
                <RedirectButton redirectTo="/" button={<FaChevronLeft className="bufferedIcon" style={{height:"1.5rem"}} />} />
                    <h2>Room 104 / Floor 1</h2>
                </div>
                <StarRating rating='4.5' size='25' />
            </div>
            <p className="bathroomAddress">
                Guthrie Annex 3 (GA3), Seattle, WA 98105
            </p>
        </div>
      );
    }
}