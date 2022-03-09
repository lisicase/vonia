import React, { useEffect, useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import { BiSearch } from 'react-icons/bi';
import BathroomCard from '../../Map/BathroomCard.js';
import BuildingList from '../../Map/BuildingList.js';
import { RedirectButton } from '../../StyleElements.js';
import { GiHamburgerMenu } from 'react-icons/gi';
import bathrooms from '../../Shared/bathroomData/bathroom-data.json'
// Map
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_TOKEN;


export default function HomePage() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'left' }}>
                <MenuButton />
            </div>
            <h1>Spotty</h1>
            <h2>Spot-a-Potty</h2>
            <TempMapPage />
        </div>
    );

}

function MenuButton() {
    return (
        <RedirectButton redirectTo="/menu" button={<button><GiHamburgerMenu /></button>} />
    );
}

function TempMapPage() {
    let searchPlaceholder = <BiSearch className="bufferedIcon" />;
    let buildingCard = <span />;
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-122.3035);
    const [lat, setLat] = useState(47.655548);
    const [zoom, setZoom] = useState(13);
    const [buildingDisplayed, updateBuildingDisplayed] = useState('');
    const hideCard = () => {
        updateBuildingDisplayed("");
    }
    //const bathrooms = BathroomData;


    // map stuff
    //const bathrooms

    bathrooms.features.forEach(function (bathroom, i) {
        bathroom.properties.id = i;
    });

    /** geolocation is a bit scuffed atm
    if ("geolocation" in navigator) {
        console.log("Geolocation available");
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(`geo lng: ${position.coords.longitude} lat: ${position.coords.latitude}`);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
        });
    } else {
        console.log("Geolocation not available");
    }
    */

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [lng, lat],
            zoom: zoom
        });

        map.current.on('load', () => {
            /* Add the data to your map as a layer */
            map.current.addLayer({
                id: 'locations',
                type: 'circle',
                /* Add a GeoJSON source containing place coordinates and information. */
                source: {
                    type: 'geojson',
                    data: bathrooms
                },
                paint: {
                    'circle-radius': 3,
                    'circle-stroke-width': 2,
                    'circle-color': '#68DCEC',
                    'circle-stroke-color': '#68DCEC'
                }
            });
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    // end map stuff

    if (buildingDisplayed === "test") {
        buildingCard =
            <div style={{ textAlign: "left", display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
                <div onClick={() => { hideCard() }} style={{ width: "15vw" }} />
                <BathroomCard hideCard={hideCard} />
                <div onClick={() => { hideCard() }} style={{ width: "15vw" }} />
            </div>;
    }

    return (
        <div>
            {/*<div style={{ height: '1rem' }} />*/}
            <form action="" className="mt-3">
                <input type="text" placeholder="Location" />
                <Button variant="primary btn-sm" id="search-button" type="submit">
                    <BiSearch />
                </Button>{' '}
            </form>
            {/*<div onClick={ hideCard} style={{ height: '5rem' }} />*/}
            {buildingCard}
            <div onClick={hideCard} ref={mapContainer} className="map-container" style={{ height: '30rem', overflow: 'hidden' }} />
            {/*<div onClick={hideCard} style={{ height: '5rem' }} />*/}
            <BuildingList updateBuildingDisplayed={updateBuildingDisplayed} />
        </div>
    );
}