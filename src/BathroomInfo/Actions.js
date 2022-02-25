import React from 'react';
import { Component } from 'react';
import { BsMap } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { VscHeart } from "react-icons/vsc";
import "./BathroomInfo.css";

export class BathroomActions extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <ActionWithTitle icon={<BsMap />} title="Directions" />
                <ActionWithTitle icon={<VscHeart />} title="Favorite" />
                <ActionWithTitle icon={<HiOutlinePencilAlt />} title="Review" />
                <ActionWithTitle icon={<FiShare2 />} title="Share" />
            </div>
        );
    }
}

class ActionWithTitle extends Component {
    render() {
        return (
            <div className="textCenter" >
                <div className="actionBtn">
                    {this.props.icon}
                </div>
                <p>{this.props.title}</p>
            </div>
        );
    }
}
