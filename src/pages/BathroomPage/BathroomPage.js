// React
import React from 'react';
import { Component } from 'react';
import { useParams } from 'react-router-dom';
// Components
import { StarRating, BathroomRatingsByCategory } from './Ratings';
import BathroomReviews from './Reviews';
import { Divider, RedirectButton } from '../../StyleElements';
import { BathroomActions } from './Actions';
import { BathroomGallery } from './Gallery';
// Icons
import { FaChevronLeft } from "react-icons/fa";
import { BathroomFeatures } from './BathroomFeatures';

//need to get the info from the db based on building id and floor id (in the url params)

export default function BathroomPage() {
    let {buildingId, bathroomId} = useParams();
    console.log(bathroomId);
    return (
        <div style={{textAlign:"left"}}>
            <BathroomPageTitle/>
            <div style={{display:'flex', flexDirection:'row', alignContent:'center' }}>
                <div style={{width:"5vw"}} />
                <div style={{width:"90vw"}}>
                    <BathroomActions />
                    <Divider />
                    <BathroomRatingsByCategory bathId={bathroomId}/>
                    <Divider />
                    <BathroomGallery />
                    <Divider />
                    <BathroomFeatures buildId={buildingId} bathId={bathroomId}/>
                    <Divider />
                    <BathroomReviews bathId={bathroomId}/>
                </div>
            </div>
        </div>
    );
}

function BathroomPageTitle() {
    return (
        <div style={{textAlign:"left"}}>
            <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <div style={{display: 'flex', flexDirection:'row'}}>
                <RedirectButton redirectTo="/" button={<FaChevronLeft className="bufferedIcon" style={{height:"1.5rem"}} />} />
                    <h2>Room 104 / Floor 1</h2> {/**TODO: replace with actual floor num */}
                </div>
                <StarRating rating='4.5' size='25' />
            </div>
            <p className="bathroomAddress">
                Guthrie Annex 3 (GA3), Seattle, WA 98105
            </p>
        </div>
    );
}