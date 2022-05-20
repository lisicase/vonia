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
import Bathrooms from '../Shared/bathroomData/bathroom-data.json'

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
    return (
        <div className="shadow" style={{ width: "70vw", borderRadius: "25px", backgroundColor: 'white' }}>
            <div style={{ margin: "1rem" }}>
                <BuildingInfo
                    name={bathroom.properties.name}
                    location={bathroom.properties.location}
                    miles={bathroom.properties.dist}
                    imgSrc={bathroom.properties.imgSrc}
                />
                {
                    bathroom.properties.floors.map((floor) => {
                        //TODO: actually implement accessibility and ids
                        const isAccessible = Math.floor(Math.random() * 2); //floor.features.accessible === "Yes"
                        const id = Math.floor(Math.random() * 20); // floor.bathroom_id
                        return (
                            <div>
                                <BathroomListItem id={id} accessible={isAccessible === 0} title={`Floor ${floor.level}`} rating={floor.rating} />
                                <ShortDivider />
                            </div>
                        );

                    })
                }
            </div>
        </div>
    );
}

export function BuildingInfo({ name, location, imgSrc, miles }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: "1rem" }}>
            <img src={imgSrc} style={{ height: '5rem', width: '5rem', objectFit: 'cover', marginRight: '1rem', borderRadius: '1rem' }} />
            <div style={{ textAlign: "left" }}>
                <h3 className="bathroomTitle"><strong>{name}</strong></h3>
                <div style={{ lineHeight: '0.5rem' }} >
                    <p>{location}</p>
                    <p>{`${miles} miles`} </p>
                </div>
            </div>
        </div>
    );
}

function BathroomListItem({ id, title, rating, accessible }) {
    let accessibility = accessible ? <MdAccessible style={{ height: "1.5rem" }} /> : <span style={{ width: '1rem' }} />;

    return (
        <div style={{ textAlign: "left" }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <FaToilet className="bufferedIcon" style={{ height: "1.5rem", fontSize: '0.7rem' }} />
                    <a href={`/#/bathroom/${id}`}>{title}</a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <StarRating rating={rating} />
                    {accessibility}
                </div>
            </div>
        </div>
    );
}