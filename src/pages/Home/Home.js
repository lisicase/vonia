// React
import React, { useEffect, useState, useRef } from "react";
// Components
import { BiSearch } from 'react-icons/bi';
import BuildingList from '../../Map/BuildingList.js';
import { RedirectButton } from '../../StyleElements.js';
import { GiHamburgerMenu } from 'react-icons/gi';
import Menu from "../../Menu.js";
import { Input, Button } from 'antd';
import Popup from 'reactjs-popup';
//Icons
import { BiFilterAlt } from "react-icons/bi";
// Map
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
// Style
import 'reactjs-popup/dist/index.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_TOKEN;


export default function HomePage(props) {
    let menuButton = <RedirectButton redirectTo="/signin" button={<button><GiHamburgerMenu /></button>} />
    if (props.userId !== "") {
        menuButton =
            <Popup trigger={<button><GiHamburgerMenu /></button>} closeOnDocumentClick={true}>
                <div><Menu /></div>
            </Popup>
    }
    return (
        <div style={{backgroundColor:'#dae1e3'}}>
            <div style={{display:'flex', backgroundColor:'white', paddingTop:'0.5rem', justifyContent:'space-between'}}>
                <div style={{display:'flex', justifyContent:'left', paddingLeft:'0.5rem', paddingRight:'0.5rem'}}>
                    {menuButton}
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    {/*<img src="favicon.ico" style={{height:'1.5rem', paddingRight:'0.5rem'}} />*/}
                    <h5>spotty</h5>
                </div>
                <button style={{opacity:'0'}}><GiHamburgerMenu /></button>
            </div>
            <TempMapPage />
        </div>
    );
}

/*return (
    <div style={{backgroundColor:'#dae1e3'}}>
        <div style={{display:'flex', backgroundColor:'white', paddingTop:'0.5rem'}}>
            <div style={{display:'flex', justifyContent:'left', paddingLeft:'0.5rem', paddingRight:'0.5rem'}}>
                {menuButton}
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <img src="favicon.ico" style={{height:'1.5rem', paddingRight:'0.5rem'}} />
                <h5>spotty</h5>
            </div>
        </div>
        <TempMapPage />
    </div>
);*/

function BathroomListing(bathroom) {
    const id = bathroom.properties.id;
    const divId = `bathroom-${id}`;
    const linkId = `link-${id}`;
    return (
        <div id={divId} className="item">
            {/** TODO: change this to a button instead of a link */}
            <a href="#" className="title" id={linkId}>{bathroom.properties.name}</a>
            <div id="listing-details">
                <p>{bathroom.properties.address}</p>
                <p>{bathroom.properties.city}</p>
            </div>
        </div>
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

    const bathrooms = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.31091976201161,
                        47.65511719894073
                    ]
                },
                "properties": {
                    "name": "Architecture Hall",
                    "address": "Architecture Hall (ARC)",
                    "city": "Seattle",
                    "country": "United States",
                    "postalCode": "98105",
                    "state": "WA",
                    "floors": [
                        {
                            "level": 0,
                            "rating": 4.0
                        }
                    ],
                    "overallRating": 4.0
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.30859952214098,
                        47.6531530133415
                    ]
                },
                "properties": {
                    "name": "Bagley Hall",
                    "address": "Bagley Hall (Bag)",
                    "city": "Seattle",
                    "country": "United States",
                    "postalCode": "98195",
                    "state": "WA",
                    "floors": [
                        {
                            "level": 0,
                            "rating": 4.0
                        }
                    ],
                    "overallRating": 4.0
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.30840106764549,
                        47.65373311108504
                    ]
                },
                "properties": {
                    "name": "Chemistry Building",
                    "address": "Rainier Vista",
                    "city": "Seattle",
                    "country": "United States",
                    "postalCode": "98195",
                    "state": "WA",
                    "floors": [
                        {
                            "level": 0,
                            "rating": 4.0
                        }
                    ],
                    "overallRating": 4.0
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.30489035393985,
                        47.658113986558625
                    ]
                },
                "properties": {
                    "name": "Communications Building",
                    "address": "2023 King Ln NE",
                    "city": "Seattle",
                    "country": "United States",
                    "postalCode": "98105",
                    "state": "WA",
                    "floors": [
                        {
                            "level": 0,
                            "rating": 4.0
                        }
                    ],
                    "overallRating": 4.0
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.31473901312123,
                        47.6559101529856
                    ]
                },
                "properties": {
                    "name": "Samuel E. Kelly Ethnic Cultural Center",
                    "address": "3931 Brooklyn Ave NE",
                    "city": "Seattle",
                    "country": "United States",
                    "postalCode": "98105",
                    "state": "WA",
                    "floors": [
                        {
                            "level": 0,
                            "rating": 4.0
                        },
                        {
                            "level": 1,
                            "rating": 3.0
                        }
                    ],
                    "overallRating": 3.5
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.30763693585985,
                        47.65655202400539
                    ]
                },
                "properties": {
                    "name": "Suzzalo and Allen Libraries",
                    "address": "4000 15th Ave NE",
                    "city": "Seattle",
                    "country": "United States",
                    "postalCode": "98195",
                    "state": "WA",
                    "floors": [
                        {
                            "level": 0,
                            "rating": 4.0
                        },
                        {
                            "level": 1,
                            "rating": 4.2
                        }
                    ],
                    "overallRating": 4.1
                }

            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.30899914257314,
                        47.657637914753685
                    ]
                },
                "properties": {
                    "name": "Kane Hall",
                    "address": "4069 Spokane Ln",
                    "city": "Seattle",
                    "country": "United States",
                    "postalCode": "98195",
                    "state": "WA",
                    "floors": [
                        {
                            "level": 0,
                            "rating": 4.0
                        },
                        {
                            "level": 1,
                            "rating": 4.4
                        }
                    ],
                    "overallRating": 4.2
                }
            }
        ]
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
            map.resize();
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

    const bathroomsList = bathrooms.features.map((bathroom) => {
        console.log(bathroom);
        BathroomListing(bathroom);
    });

    console.log(bathroomsList); // DEBUG

    return (
        <div>
            <div style={{marginBottom:'1rem', marginTop:'1rem'}} className="searchBar">
                <Input.Group compact>
                    <Input placeholder="Location" style={{ width:'70vw', textAlign:'left'}} prefix={<BiSearch color="gray" />} />
                    <Button><BiFilterAlt color="gray"/></Button>
                </Input.Group>
            </div>
            {buildingCard}
            <div ref={mapContainer} className="map-container" style={{height:'30rem', overflow:'hidden'}}/>
            <BuildingList />
        </div>
    );
}