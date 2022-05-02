// React
import React, { useState, Component } from 'react';
import { useNavigate } from "react-router-dom";
// Components
import { RedirectButton, Logo } from "../../StyleElements";
import { TextField } from '@mui/material';
// Icons
import { MdLockOutline, MdOutlineMail } from "react-icons/md";
//firebase
import { app } from '../../Shared/firebase/firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken);
                if (sessionStorage.getItem('Auth Token')) {
                    nav('/');
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`${errorCode}: ${errorMessage}`);
            })
    };

    return (
        <div>
            <div style={{ textAlign: "left" }}>
                <RedirectButton redirectTo="/" button={<i className="open-details fa fa-chevron-left" aria-hidden="true"></i>} />
                <h1>Log In</h1>
            </div>
            <Logo />
            <SignInForm
                handleSubmit={handleSubmit}
                handleEmail={(event) => setEmail(event.target.value)}
                handlePassword={(event) => setPassword(event.target.value)}
            />
        </div>
    );
}

function SignInForm(props) {
    return (
        <form class="form-inline" onSubmit={props.handleSubmit}>
            <div style={{ textAlign: "left", display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
                <div style={{ width: "15vw" }} />
                <div style={{ width: "70vw" }}>
                    <AccountInputBoxes handleEmail={props.handleEmail} handlePassword={props.handlePassword} />
                    <RedirectButton redirectTo="/register" button={<p className="textCenter">Don't have an account? <strong className="actionBtn">Register Here</strong></p>}/>
                </div>
            </div>
            <div style={{ marginTop: "20vw" }}>
                <LogInButton />
                {/*<p>Forgot username or password?</p>*/}
            </div>
        </form>
    );
}

function AccountInputBoxes(props) {
    return (
        <div>
            <div class="form-group mr-3" style={{ display: 'flex' }}>
                <label for="searchQuery" class="mr-2"><MdOutlineMail className="bufferedIcon" size={30} style={{ height: '4rem' }} /></label>
                <TextField onChange={props.handleEmail} id="standard-basic" label="Email" variant="standard" fullWidth />
            </div>
            <div class="form-group mr-3" style={{ display: 'flex' }}>
                <label for="searchQuery" class="mr-2"><MdLockOutline className="bufferedIcon" size={30} style={{ height: '4rem' }} /></label>
                <TextField onChange={props.handlePassword} id="standard-basic" label="Password" variant="standard" fullWidth />
            </div>
        </div>
    );
}

function LogInButton() {
    return (
        <button type="submit" class="btn submitBtn">
            <i className="fa-solid fa-right-to-bracket" aria-hidden="true"></i>LOGIN
        </button>
    );
}