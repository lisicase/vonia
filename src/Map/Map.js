import React, { useEffect, useState, useRef } from "react";
import { BiSearch } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';
// Modularizing
import BathroomCard from './BathroomCard.js';
import BuildingList from './BuildingList.js';
import bathrooms from '../Shared/bathroomData/bathroom-data.json'
// Map
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { map } from "@firebase/util";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_TOKEN;

export default function InitMap() {
    let searchPlaceholder = <BiSearch className="bufferedIcon" />;
    let buildingCard = <span />;
    const [buildingDisplayed, updateBuildingDisplayed] = useState('');
    const hideCard = () => {
        updateBuildingDisplayed("");
    }

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-122.3035);
    const [lat, setLat] = useState(47.655548);
    const [zoom, setZoom] = useState(13);

    const flyToStore = (currentFeature) => {
        map.current.flyTo({
            center: currentFeature.geometry.coordinates,
            zoom: 15
        });
    }

    const createPopUp = (currentFeature) => {
        const popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps.remove();

    }

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

    return (
        <div>
            <form action="" className="mt-3">
                <input type="text" placeholder="Location" />
                <Button variant="primary btn-sm" id="search-button" type="submit">
                    <BiSearch />
                </Button>{' '}
            </form>
            {buildingCard}
            <div ref={mapContainer} className="map-container" style={{ height: '30rem', overflow: 'hidden' }} />
            <BuildingList />
        </div>
    );
}