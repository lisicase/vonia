import React, { useEffect, useState, useRef, Component } from "react";
import Button from 'react-bootstrap/Button';
import { BiSearch } from 'react-icons/bi';
import BathroomCard from '../../Map/BathroomCard.js';
import BuildingList from '../../Map/BuildingList.js';
import { RedirectButton } from '../../StyleElements.js';
import { GiHamburgerMenu } from 'react-icons/gi';
// Map
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import ReactMapGL, {Marker} from 'react-map-gl';


import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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
    const [buildingDisplayed, updateBuildingDisplayed] = useState('');
    const hideCard = () => {
        updateBuildingDisplayed("");
    }

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

    console.log(bathroomsList);
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
            {buildingCard}
            <div ref={mapContainer} className="map-container" style={{height:'30rem', overflow:'hidden'}}/>
            <BuildingList hideCard={hideCard} updateBuildingDisplayed={updateBuildingDisplayed} />
        </div>
    );
}


/*class PopUp extends Component {
  render() {
    return (
     <div className="modal">
       <div className="modal_content">
       <span className="close">&times;</span>
       <p>I'm A Pop Up!!!</p>
      </div>
     </div>
    );
   }
}*/