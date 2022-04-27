// React
import React from 'react';
import { Component, useState } from 'react';
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

export default function Menu() {

    let [redirectTo, setRedirect] = useState('');

    let openReviewHistory = () => {
        setRedirect("reviews");
    }

    let openFavorites = () => {
        setRedirect("favorites");
    }

    let signOut = () => {
        sessionStorage.removeItem('Auth Token');
        return <Navigate to='/'/>;
    }

    if (redirectTo !== "") {
        let newPath = "/" + redirectTo;
        return <Navigate to={newPath} />;
    }
    return (
        <div className="fillLeftPage" style={{ textAlign: "left", display: 'flex', flexDirection: 'row', alignContent: 'center', backgroundColor: 'white' }}>
            <div className="shadow" style={{ width: "80vw", height: "100vh" }}>
                <div style={{ margin: "1rem" }}>
                    <AccountInfo
                        username="rebec20"
                        location="Rainier Vista"
                        miles="0.1"
                        imgSrc="logo192.png"
                    />
                    <ShortDivider />
                    <MenuItem handleClick={openFavorites} title="Favorites" icon={<VscHeart className="bufferedIcon" style={{ height: "1.5rem" }} />} />
                    <MenuItem handleClick={openReviewHistory} title="Review History" icon={<GrHistory className="bufferedIcon" style={{ height: "1.5rem", width: "0.8rem" }} />} />
                    <MenuItem title="Account" icon={<MdLockOutline className="bufferedIcon" style={{ height: "1.5rem" }} />} />
                    <MenuItem title="Help" icon={<IoHelpCircleOutline className="bufferedIcon" style={{ height: "1.5rem" }} />} />
                    <MenuItem title="Sign Out" handleClick={signOut} icon={<IoLogOutOutline className="bufferedIcon" style={{ height: "1.5rem" }} />} />
                </div>
            </div>
            {/*<RedirectButton rediectTo="/" button={<div style={{width:"20vw"}}/>} />*/}
        </div>
    );

}

class AccountInfo extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: "1rem" }}>
                <BiUserCircle className="bufferedIcon" style={{ height: "1.5rem" }} />
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
            <div style={{ textAlign: "left" }}>
                <div onClick={this.props.handleClick} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {this.props.icon}
                        <p>{this.props.title}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <AiOutlineRight style={{ height: "1.5rem" }} />
                    </div>
                </div>
            </div>
        );
    }
}