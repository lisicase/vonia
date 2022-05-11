// React
import React from 'react';
import { Navigate } from 'react-router-dom';
// Components
import { RedirectButton, Logo } from "../../StyleElements";
import { LogInButton } from '../Signin/Signin';
// Authentication
import { getAuth } from 'firebase/auth';

export default function WelcomePage() {
    if (!sessionStorage.getItem('Auth Token')) {
        return <Navigate to={"/"} />
    }
    
    let auth = getAuth();
    let displayName = auth.currentUser.displayName;
    let loginBtn = <LogInButton />;

    return (
        <div>
            <div style={{textAlign:'center', paddingTop:'2rem'}}>
            <h1>Welcome to the Spotty community, <strong>{displayName}</strong>!</h1>
            </div>
            <Logo />
            <form class="form-inline">
                <div style={{marginTop:'20vw'}}>
                    <RedirectButton button={loginBtn} redirectTo="/signin"/>
                </div>
            </form>
        </div>
    );
}