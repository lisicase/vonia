import React from 'react';
import { Component } from 'react';

export class BathroomGallery extends Component {
    render() {
        return (
            <div>
                <h2>Gallery</h2>
                <div style={{ display: 'flex', height: "5rem" }}>
                    <img src="logo192.png" style={{ height: '5rem' }} />
                    <img src="logo192.png" style={{ height: '5rem' }} />
                    <img src="logo192.png" style={{ height: '5rem' }} />
                    <img src="logo192.png" style={{ height: '5rem' }} />
                    <img src="logo192.png" style={{ height: '5rem' }} />
                </div>
            </div>
        );
    }
}
