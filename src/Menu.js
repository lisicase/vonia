// React
import React from 'react';
import { Component } from 'react';
import { Navigate } from 'react-router-dom';
// Components
import { ShortDivider } from './StyleElements';
// Icons
import { AiOutlineRight } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { GrHistory } from "react-icons/gr";
import { IoHelpCircleOutline, IoLogOutOutline } from "react-icons/io5";
import { MdAccessible, MdLockOutline } from "react-icons/md";
import { VscHeart } from "react-icons/vsc";

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectTo: ""
        };
    }
    
    openReviewHistory = () => {
        this.setState({ redirectTo: "reviews" });
    }

    render() {
        if (this.state && this.state.redirectTo === "reviews") {
            let newPath = "/" + this.state.redirectTo;
            return <Navigate to={newPath} />
        }
      return (
        <div style={{textAlign:"left", display:'flex', flexDirection:'row', alignContent:'center'}}>
            <div className="shadow" style={{width:"80vw", height:"100vh"}}>
                <div style={{margin:"1rem"}}>
                    <AccountInfo 
                        username="rebec20" 
                        location="Rainier Vista" 
                        miles="0.1" 
                        imgSrc="logo192.png" 
                    />
                    <ShortDivider />
                    <MenuItem title="Favorites" icon={<VscHeart className="bufferedIcon" style={{height:"1.5rem"}} />} />
                    <MenuItem handleClick={this.openReviewHistory} title="Review History" icon={<GrHistory className="bufferedIcon" style={{height:"1.5rem", width:"0.8rem"}} />} />
                    <MenuItem title="Account" icon={<MdLockOutline className="bufferedIcon" style={{height:"1.5rem"}} />} />
                    <MenuItem title="Help" icon={<IoHelpCircleOutline className="bufferedIcon" style={{height:"1.5rem"}} />} />
                    <MenuItem title="Sign Out" icon={<IoLogOutOutline className="bufferedIcon" style={{height:"1.5rem"}} />} />
                </div>
            </div>
        </div>
      );
    }
}

class AccountInfo extends Component {
    render() {
      return (
        <div style={{display: 'flex', flexDirection:'row', marginBottom:"1rem"}}>
            <BiUserCircle className="bufferedIcon" style={{height:"1.5rem"}} />
            <p><strong>{this.props.username}</strong></p>
        </div>
      );
    }
}

class MenuItem extends Component {
    render() {
        if (this.state && this.state.redirectTo === "reviews") {
            let newPath = "/" + this.state.redirectTo;
            return <Navigate to={newPath} />
        }
      return (
        <div style={{textAlign:"left"}}>
            <div onClick={this.props.handleClick} style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <div style={{display: 'flex', flexDirection:'row'}}>
                    {this.props.icon}
                    <p>{this.props.title}</p>
                </div>
                <div style={{display: 'flex', flexDirection:'row'}}>
                    <AiOutlineRight style={{height:"1.5rem"}} />
                </div>
            </div>
        </div>
      );
    }
}