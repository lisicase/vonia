import React, { useEffect, useState, useRef } from "react";
import Button from 'react-bootstrap/Button';

// Map
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_TOKEN;


export default function HomePage() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-122.3035);
    const [lat, setLat] = useState(47.655548);
    const [zoom, setZoom] = useState(15);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
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
            <h1>Spotty</h1>
            <h2>Spot-a-Potty</h2>
            <form action="" className="mt-3">
                <input type="text" placeholder="Location" />
                <div>
                    <div ref={mapContainer} className="map-container" />
                </div>
                <Button variant="primary btn-sm" id="search-button" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </Button>{' '}
            </form>
        </div>
    );

}