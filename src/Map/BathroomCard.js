// React
import React from 'react';
import { Component } from 'react';
import { Navigate } from 'react-router-dom';
// Components
import { StarRating } from '../Pages/BathroomPage/Ratings';
import { ShortDivider } from '../StyleElements';
// Icons
import { FaToilet } from "react-icons/fa";
//import { GrRestroomWomen } from "react-icons/gr";
import { MdAccessible } from "react-icons/md";

export default class BathroomCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectTo: ""
        };
    }
    
    openBathroomInfo = () => {
        this.setState({ redirectTo: "bathroom" });
    }

    render() {
      if (this.state && this.state.redirectTo === "bathroom") {
        return <Navigate to={"/bathroom"} />
      }
      return (
        <div className="shadow centeredOnPage" style={{width:"70vw", borderRadius:"25px", backgroundColor:'white'}}>
            <div style={{margin:"1rem"}}>
                <BuildingInfo 
                    name={this.props.name} 
                    location={this.props.location}
                    miles={this.props.miles} 
                    imgSrc={this.props.imgSrc}
                />
                <BathroomListItem handleClick={this.openBathroomInfo} title="Room 104 / Floor 1" accessible={true} rating={3} />
                <ShortDivider />
                <BathroomListItem title="Room 204 / Floor 2" accessible={false} rating={5} />
                <ShortDivider />
                <BathroomListItem title="Room 304 / Floor 3" accessible={true} rating={2} />
                <ShortDivider />
            </div>
        </div>
      );
    }
}

export class BuildingInfo extends Component {
    render() {
      return (
        <div style={{display: 'flex', flexDirection:'row', marginBottom:"1rem"}}>
            <img src={this.props.imgSrc} style={{ height:'5rem', width:'5rem', objectFit:'cover', marginRight:'1rem', borderRadius:'1rem' }} />
            <div style={{textAlign:"left"}}>
                <h3 className="bathroomTitle"><strong>{this.props.name}</strong></h3>
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
                <div onClick={this.props.handleClick} style={{display: 'flex', flexDirection:'row'}}>
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