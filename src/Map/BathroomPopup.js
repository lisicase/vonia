// React
import React, { useState, Component } from 'react';
import { Navigate } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';
// Components
import { StarRating } from '../Pages/BathroomPage/Ratings';
import { ShortDivider } from '../StyleElements';
// Icons
import { FaToilet } from "react-icons/fa";
//import { GrRestroomWomen } from "react-icons/gr";
import { MdAccessible } from "react-icons/md";
// Bathroom Data
import { averageBathRating } from '../Pages/BathroomPage/BathroomPage';

export default function BathroomCard({ bathroom }) {
    const [redirectTo, updateRedirectTo] = useState("");
    //const nav = useNavigate();

    const openBathroomInfo = () => {
        console.log("reaching redirect");
        //return <Navigate to={"/bathroom"} />
    }

    console.log(bathroom);
    console.log(bathroom.properties.floors);

    if (redirectTo && redirectTo === "bathroom") {
        return <Navigate to={"/bathroom"} />
    }

    let buildingID = bathroom.properties.uid;

    let floorRatingsList = [];
    let floorList = bathroom.properties.floors.map((floor) => {
        //TODO: actually implement accessibility and ids
        const isAccessible = floor.features.accessible === "Yes"; //floor.features.accessible === "Yes"
        const id = floor.bathroom_id; // pull this from the db (fetch(localhost:8080/bathroomID))
        let floorRating = averageBathRating(id);
        floorRatingsList.push(floorRating);
        return (
            <div>
                <BathroomListItem buildid={buildingID} bathid={id} accessible={isAccessible === 0} title={`Floor ${floor.level}`} rating={floorRating} />
                <ShortDivider />
            </div>
        );
    })

    return (
        <div className="shadow" style={{ width: "70vw", borderRadius: "25px", backgroundColor: 'white' }}>
            <div style={{ margin: "1rem" }}>
                <BuildingInfo
                    name={bathroom.properties.name}
                    location={bathroom.properties.address}
                    miles={bathroom.properties.dist}
                    imgSrc={bathroom.properties.imgSrc}
                    ratingVisible
                />
                {floorList}
            </div>
        </div>
    );
}

export function BuildingInfo({ name, location, imgSrc, miles, rating }) {
    let ratingElement = <span/>;
    if (rating) {
        ratingElement = <StarRating rating={rating} />;
    }
    return (
        <div style={{display:'flex', justifyContent:'space-between', marginBottom:'1rem' }}>
            <div style={{display:'flex', flexDirection:'row'}}>
                <img src={imgSrc} style={{height:'5rem', width:'5rem', objectFit:'cover', marginRight:'1rem', borderRadius:'1rem' }} />
                <div style={{textAlign:'left'}}>
                    <h3 className="bathroomTitle"><strong>{name}</strong></h3>
                    <div style={{lineHeight:'0.5rem'}} >
                        <p>{location}</p>
                        <p>{`${miles} miles`} </p>
                    </div>
                </div>
            </div>
            {ratingElement}
        </div>
    );
}

function BathroomListItem({ buildid, bathid, title, rating, accessible }) {
    let accessibility = accessible ? <MdAccessible style={{ height: "1.5rem" }} /> : <span style={{ width: '1rem' }} />;

    return (
        <div style={{ textAlign: "left" }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <FaToilet className="bufferedIcon" style={{ height: "1.5rem", fontSize: '0.7rem' }} />
                    <a href={`vonia/#/bathroom/${buildid}/${bathid}`}>{title}</a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <StarRating rating={rating} />
                    {accessibility}
                </div>
            </div>
        </div>
    );
}