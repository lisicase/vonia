// React
import React from 'react';
import { Component } from 'react';
// Components
import { StarRating, BathroomRatingsByCategory } from './Ratings';
import BathroomReviews from './Reviews';
import { Divider } from '../StyleElements';
import { BathroomActions } from './Actions';
import { BathroomGallery } from './Gallery';
// Icons
import { FaToilet, FaChevronLeft } from "react-icons/fa";
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
                    <FaChevronLeft />
                    <FaToilet style={{marginRight:'5'}} />
                    <p style={{fontSize:'18px'}}><strong>Room 104 / Floor 1</strong></p>
                </div>
                <StarRating />
            </div>
            <p style={{marginLeft:'10px', fontSize:'14px', color:'#626262'}}>
                <strong>Guthrie Annex 3 (GA3), Seattle, WA 98105</strong>
            </p>
        </div>
      );
    }
}