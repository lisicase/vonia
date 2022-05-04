// React
import React from 'react';
import { Navigate } from 'react-router-dom';
// Components
import { RedirectButton, Logo } from "../../StyleElements";


import { getAuth } from 'firebase/auth';

export default function WelcomePage() {
    if (!sessionStorage.getItem('Auth Token')) {
        return <Navigate to={"/"} />
    }
    
    let auth = getAuth();
    console.log(auth);
    let username = auth.currentUser.displayName;
    console.log("TEST:::");
    console.log(sessionStorage);
    /*let redirectLocation = "/";
    if (sessionStorage.getItem('Auth Token')) {
        redirectLocation = "/";
    }


    let startButton = 
        <RedirectButton 
            redirectTo={redirectLocation} 
            button={<SignUpButton/>} 
        />;*/

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <h1>{username}</h1>
                <h1>Welcome, DISPLAY_NAME!</h1>
            </div>
            <Logo />
            <form class="form-inline">
                <div style={{ marginTop: "20vw" }}>
                    <SignUpButton/>
                </div>
            </form>
        </div>
    );
}

function SignUpButton() {
    return (
        <button type="submit" class="btn submitBtn" style={{borderRadius:'25px', width:'13rem'}}>
            <i className="fa-solid fa-right-to-bracket" aria-hidden="true"></i>FIND A BATHROOM
        </button>
    );
}