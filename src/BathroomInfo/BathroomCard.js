// React
import React from 'react';
import { Component } from 'react';
// Components
import { StarRating } from './Ratings';
import { ShortDivider } from '../StyleElements';
// Icons
import { FaToilet } from "react-icons/fa";
//import { GrRestroomWomen } from "react-icons/gr";
import { MdAccessible } from "react-icons/md";

export default class BathroomCard extends Component {
    render() {
      return (
        <div style={{textAlign:"left", display:'flex', flexDirection:'row', alignContent:'center'}}>
            <div style={{width:"15vw"}} />
            <div className="shadow" style={{width:"70vw", borderRadius:"25px"}}>
                <div style={{margin:"1rem"}}>
                    <BuildingInfo 
                        name="Chemistry Building" 
                        location="Rainier Vista" 
                        miles="0.1" 
                        imgSrc="logo192.png" 
                    />
                    <BathroomListItem title="Room 104 / Floor 1" accessible={true} rating='3' />
                    <ShortDivider />
                    <BathroomListItem title="Room 204 / Floor 2" accessible={false} rating='5' />
                    <ShortDivider />
                    <BathroomListItem title="Room 304 / Floor 3" accessible={true} rating='2' />
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
            <img src={this.props.imgSrc} style={{ height:'6rem', marginRight:'1rem' }} />
            <div style={{textAlign:"left"}}>
                <h1 className="bathroomTitle"><strong>{this.props.name}</strong></h1>
                <div style={{lineHeight:'0.5rem'}} >
                    <p>{this.props.location}</p>
                    <p>{this.props.miles} miles</p>
                </div>
            </div>
        </div>
      );
    }
}

class BathroomListItem extends Component {
    render() {
      let accessibility = this.props.accessible? <MdAccessible style={{height:"1.5rem"}} /> : <span style={{width:'1rem'}}/>;
      return (
        <div style={{textAlign:"left"}}>
            <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <div style={{display: 'flex', flexDirection:'row'}}>
                    <FaToilet className="bufferedIcon" style={{height:"1.5rem", fontSize:'0.7rem'}} />
                    <p><strong>{this.props.title}</strong></p>
                </div>
                <div style={{display: 'flex', flexDirection:'row'}}>
                    <StarRating rating={this.props.rating} />
                    {accessibility}
                </div>
            </div>
        </div>
      );
    }
}