// React
import React, { useEffect, useState, useRef } from "react";
import { renderToString } from 'react-dom/server';
import { BiSearch, BiFilterAlt } from 'react-icons/bi';
import { RedirectButton } from '../StyleElements.js';
// Modularizing
import BathroomCard from './BathroomPopup.js';
import BuildingList from './BuildingList.js';
import { Input, Button } from 'antd';
// Data
import bathrooms from '../Shared/bathroomData/bathroom-data.json'
// Map
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_TOKEN;

export default function InitMap() {
    let searchPlaceholder = <BiSearch className="bufferedIcon" />;
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
        console.log('flying to store');
        console.log(currentFeature);
        map.current.flyTo({
            center: currentFeature.geometry.coordinates,
            zoom: 15
        });
    }

    const createPopUp = (currentFeature) => {
        const popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps[0].remove();
        console.log('creating popup:');
        console.log(currentFeature);
        const test = <BathroomCard bathroom={currentFeature} />;
        const output = document.createElement("div");
        const html = renderToString(test);
        output.innerHTML = `<div>${html}</div>`;

        let coords = currentFeature.geometry.coordinates
        let offsetCoords = [coords[0], coords[1] + 0.0101];

        const popup = new mapboxgl.Popup({ closeOnClick: true })
            .setLngLat(offsetCoords)
            .setDOMContent(output)
            .addTo(map.current);
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

        map.current.on('click', (event) => {
            /* Determine if a feature in the "locations" layer exists at that point. */
            const features = map.current.queryRenderedFeatures(event.point, {
                layers: ['locations']
            });

            console.log(event);

            /* If it does not exist, return */
            if (!features.length) return;
            console.log(features);
            const clickedPoint = features[0];
            clickedPoint.properties.floors = JSON.parse(clickedPoint.properties.floors);
            console.log(features);

            /* Fly to the point */
            flyToStore(clickedPoint);

            /* Close all other popups and display popup for clicked store */
            createPopUp(clickedPoint);

            const listing = document.getElementById(
                `listing-${clickedPoint.properties.id}`
            );
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
            <div style={{marginBottom:'1rem', marginTop:'1rem'}} className="searchBar">
                <Input.Group compact>
                    <Input placeholder="Location" style={{ width:'70vw', textAlign:'left'}} prefix={<BiSearch color="gray" />} />
                    <RedirectButton redirectTo="/filter" button={<Button><BiFilterAlt color="gray"/></Button>} />
                </Input.Group>
            </div>
            <div ref={mapContainer} className="map-container" style={{ height: '30rem', overflow: 'hidden' }} />
            <BuildingList flyToStore={flyToStore} createPopup={createPopUp} />
        </div>
    );
}