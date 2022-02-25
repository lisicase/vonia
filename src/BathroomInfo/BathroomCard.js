// React
import React from 'react';
import { Component } from 'react';
// Components
import { StarRating } from './Ratings';
import { ShortDivider } from '../StyleElements';
// Icons
import { GrRestroomWomen } from "react-icons/gr";
import { MdAccessible } from "react-icons/md";

export default class BathroomCard extends Component {
    render() {
      return (
        <div style={{textAlign:"left", display:'flex', flexDirection:'row', alignContent:'center'}}>
            <div style={{width:"15vw"}} />
            <div className="shadow" style={{width:"70vw", borderRadius:"25px"}}>
                <div style={{margin:"1rem"}}>
                    <BuildingInfo />
                    <BathroomListItem />
                    <ShortDivider />
                    <BathroomListItem />
                    <ShortDivider />
                    <BathroomListItem />
                    <ShortDivider />
                </div>
            </div>
        </div>
      );
    }
}

class BuildingInfo extends Component {
    render() {
      return (
        <div style={{display: 'flex', flexDirection:'row', marginBottom:"1rem"}}>
            <img src="logo192.png" style={{ height:'6rem', marginRight:'1rem' }} />
            <div style={{textAlign:"left"}}>
                <h1 className="bathroomTitle"><strong>Chemistry Building</strong></h1>
                <div style={{lineHeight:'0.5rem'}} >
                    <p>Rainier Vista</p>
                    <p>0.1 miles</p>
                </div>
            </div>
        </div>
      );
    }
}

class BathroomListItem extends Component {
    render() {
      return (
        <div style={{textAlign:"left"}}>
            <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <div style={{display: 'flex', flexDirection:'row'}}>
                    <GrRestroomWomen className="bufferedIcon" style={{height:"1.5rem"}} />
                    <p><strong>Room 104 / Floor 1</strong></p>
                </div>
                <div style={{display: 'flex', flexDirection:'row'}}>
                    <StarRating />
                    <MdAccessible style={{height:"1.5rem"}} />
                </div>
            </div>
        </div>
      );
    }
}