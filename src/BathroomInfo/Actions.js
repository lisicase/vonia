import React from 'react';
import { Component } from 'react';
import { BsMap } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { VscHeart } from "react-icons/vsc";

export class BathroomActions extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <ActionWithTitle icon={<BsMap size={30} />} title="Directions" />
                <ActionWithTitle icon={<VscHeart size={30} />} title="Favorite" />
                <ActionWithTitle icon={<HiOutlinePencilAlt size={30} />} title="Review" />
                <ActionWithTitle icon={<FiShare2 size={30} />} title="Share" />
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
