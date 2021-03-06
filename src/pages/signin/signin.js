// React
import React, { useState, Component } from 'react';
import { useNavigate } from "react-router-dom";
// Components
import { RedirectButton, Logo } from "../../StyleElements";
import { TextField } from '@mui/material';
// Icons
import { FaChevronLeft } from "react-icons/fa";
import { MdLockOutline, MdOutlineMail } from "react-icons/md";
//firebase
import { app } from '../../Shared/firebase/firebase-config';
import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth';

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const auth = getAuth();

        setPersistence(auth, browserSessionPersistence)
            .then(() => {
                return signInWithEmailAndPassword(auth, email, password)
                    .then((res) => {
                        sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken);
                        sessionStorage.setItem('User ID', auth.currentUser.uid);
                        if (sessionStorage.getItem('Auth Token')) {
                            nav('/');
                        }
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        alert(`${errorCode}: ${errorMessage}`);
                    })
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;

                alert(`${errorCode}: ${errorMessage}`);
            });


    };

    return (
        <div>
            <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <div style={{display: 'flex', flexDirection:'row'}}>
                <RedirectButton redirectTo="/" button={<FaChevronLeft className="bufferedIcon" style={{height:"1.5rem"}} />} />
                    <h2>Log In</h2>
                </div>
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
                    <RedirectButton redirectTo="/register" button={<p className="textCenter">Don't have an account? <strong className="actionBtn">Register Here</strong></p>} />
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