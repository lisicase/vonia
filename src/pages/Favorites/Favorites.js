// React
import React from 'react';
import { Component } from 'react';
import { Navigate } from 'react-router-dom';
// Components
import { ShortDivider } from '../../StyleElements';
import BathroomCard from '../../Map/BathroomCard';
import { StarRating } from '../BathroomPage/Ratings';
import Popup from 'reactjs-popup';
import { RedirectButton } from '../../StyleElements';
// Icons
import { BsChevronDown } from "react-icons/bs";
// Style
import 'reactjs-popup/dist/index.css';

export default class FavoritesPage extends Component {
    render() {
        const bldgInfo1 = {bldgId:1, bldgName:"Chemistry Building", location: "Rainier Vista", miles:"0.1", imgSrc:"temp-imgs/buildings/CHB.png", rating:4.6}
        const bldgInfo2 = {bldgId:2, bldgName:"Physics/Astronomy Auditorium", location: "3910 15th Ave NE", miles:"0.1", imgSrc:"temp-imgs/buildings/PAA.png", rating:4.3}
        const bldgInfo3 = {bldgId:3, bldgName:"Husky Union Bldg", location: "4001 E Stevens Way NE", miles:"0.3", imgSrc:"temp-imgs/buildings/HUB.jpg", rating:3.1}
        const bldgInfo4 = {bldgId:4, bldgName:"Mary Gates Hall", location: "1851 NE Grant Ln", miles:"0.3", imgSrc:"temp-imgs/buildings/MGH.jpg", rating:3.6}
        const bldgInfo5 = {bldgId:5, bldgName:"Alder Hall", location: "1315 NE Campus Pkwy", miles:"0.4", imgSrc:"temp-imgs/buildings/HFS-Alder.jpg", rating:4.9}
        const bldgInfo6 = {bldgId:6, bldgName:"Hans Rosling Center", location: "Guthrie Annex 3 (GA3)", miles:"0.4", imgSrc:"temp-imgs/buildings/HRC.jpg", rating:4.6}
        const bldgInfo7 = {bldgId:7, bldgName:"Suzzalo Library", location: "4000 15th Ave NE", miles:"0.5", imgSrc:"temp-imgs/buildings/SUZ.jpg", rating:3.1}

        const buildings = [bldgInfo1, bldgInfo2, bldgInfo3, bldgInfo4, bldgInfo5, bldgInfo6, bldgInfo7]

        let items = buildings.map((info) => {
            return <FavoritesListItem handleClick={this.props.test} bldgInfo={info} key={info.bldgId} />;
        })

        return (
            <div>
                <div style={{ textAlign: "left" , }}>
                    <RedirectButton redirectTo="/" button={<i className="open-details fa fa-chevron-left" aria-hidden="true"></i>} />
                    <h1>Favorites</h1>
                </div>
                <div>
                    {items}
                </div>
            </div>
        );
    }
}

class FavoritesListItem extends Component {
    render() {
      return (
        <div style={{margin:"1rem"}}>
            <div style={{textAlign:"left", display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <RedirectButton redirectTo="/bathroom" button={
                    <FavBathroomInfo bldgInfo={this.props.bldgInfo} />
                } />
                <StarRating rating={this.props.bldgInfo.rating} />
            </div>
            <ShortDivider />
        </div>
      );
    }
}

export class FavBathroomInfo extends Component {
    render() {
        let b = this.props.bldgInfo;
        return (
            <div style={{display: 'flex', flexDirection:'row', marginBottom:"1rem"}}>
                <img src={b.imgSrc} style={{ height:'5rem', width:'5rem', objectFit:'cover', marginRight:'1rem', borderRadius:'1rem' }} />
                <div style={{textAlign:"left"}}>
                    <h3 className="bathroomTitle"><strong>{b.bldgName}</strong></h3>
                    <div style={{lineHeight:'0.5rem'}} >
                        <p>{b.location}</p>
                        <p>{b.miles} miles</p>
                    </div>
                </div>
            </div>
        );
    }
}