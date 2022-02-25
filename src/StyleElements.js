// React
import React from 'react';
import { Component } from 'react';

export class Divider extends Component {
    render() {
        return (
            <div style={{ 
                borderBottom: '1px solid #E5E5E5', 
                paddingTop:'1rem', 
                marginBottom:'1rem'
            }} />
        )
    }
}