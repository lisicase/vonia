// React
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from 'react';
import React from 'react';
// Components
import { RedirectButton, Logo } from "../../StyleElements";
import { TextField } from '@mui/material';
// Icons
import { BiUserCircle } from "react-icons/bi";
import { FaChevronLeft } from "react-icons/fa";
import { MdLockOutline, MdOutlineMail } from "react-icons/md";
//firebase
import { app } from '../../Shared/firebase/firebase-config';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';

export default function RegistrationPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const nav = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        let auth = getAuth();
        let user = null;

        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res);
                sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken);
                user = auth.currentUser;
                console.log(auth.currentUser);
                sendEmailVerification(user);

                console.log(sessionStorage.getItem('Auth Token'));

                if (sessionStorage.getItem('Auth Token')) {
                    updateProfile(auth.currentUser, {
                        displayName: name
                    })
                        .then(() => {
                            console.log("successfully updated account");
                            console.log(auth.currentUser);
                            nav('/');
                        })
                        .catch((error) => {
                            let code = error.code;
                            let message = error.message;
                            alert(`Error ${code}: ${message}. Please try again`);
                        });
                }
            })
            .catch((error) => {
                let code = error.code;
                let message = error.message;
                if (code === 'auth/email-already-in-use') {
                    alert("Error: email already in use. Please try a different one")
                } else {
                    alert(`${code}: ${message}`);
                }

            });

    };

    return (
        <div>
            <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <div style={{display: 'flex', flexDirection:'row'}}>
                <RedirectButton redirectTo="/" button={<FaChevronLeft className="bufferedIcon" style={{height:"1.5rem"}} />} />
                    <h2>Welcome to Spotty!</h2>
                </div>
            </div>
            <Logo />
            <RegisterForm
                handleSubmit={handleSubmit}
                handleId={(event) => setName(event.target.value)}
                handleEmail={(event) => setEmail(event.target.value)}
                handlePassword={(event) => setPassword(event.target.value)}
            />
        </div>
    );
}

function RegisterForm(props) {
    return (
        <form class="form-inline" onSubmit={props.handleSubmit}>
            {/*<AccountInputBoxes handleId={props.handleId} handleEmail={props.handlEmail} handlPassword={props.handlPassword} />*/}
            <div style={{ textAlign: "left", display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
                <div style={{ width: "15vw" }} />
                <div style={{ width: "70vw" }}>
                    <div class="form-group mr-3" style={{ display: 'flex' }}>
                        <label for="searchQuery" class="mr-2"><BiUserCircle className="bufferedIcon" size={30} style={{ height: '4rem' }} /></label>
                        <TextField onChange={props.handleId} id="standard-basic" label="Display Name" variant="standard" fullWidth required={true} />
                    </div>
                    <div class="form-group mr-3" style={{ display: 'flex' }}>
                        <label for="searchQuery" class="mr-2"><MdOutlineMail className="bufferedIcon" size={30} style={{ height: '4rem' }} /></label>
                        <TextField onChange={props.handleEmail} id="standard-basic" label="Email" variant="standard" fullWidth required={true} />
                    </div>
                    <div class="form-group mr-3" style={{ display: 'flex' }}>
                        <label for="searchQuery" class="mr-2"><MdLockOutline className="bufferedIcon" size={30} style={{ height: '4rem' }} /></label>
                        <TextField onChange={props.handlePassword} id="standard-basic" label="Password" variant="standard" fullWidth required={true} />
                    </div>
                </div>
            </div>

            <div style={{ marginTop: "20vw" }}>
                <SignUpButton />
            </div>
        </form>
    );
}

function AccountInputBoxes(props) {
    return (
        <div>
            {/*<div class="form-group mr-3" style={{ display: 'flex' }}>
                <label for="searchQuery" class="mr-2"><BiUserCircle className="bufferedIcon" size={30} style={{ height: '2rem' }} /></label>
                <input placeholder="Username" type="text" name="term" id="searchQuery" class="form-control" onChange={props.handleEmail} />
            </div>
            <div class="form-group mr-3" style={{ display: 'flex' }}>
                <label for="searchQuery" class="mr-2"><MdLockOutline className="bufferedIcon" size={30} style={{ height: '2rem' }} /></label>
                <input placeholder="Password" type="text" name="term" id="searchQuery" class="form-control" onChange={props.handlePassword} />
            </div>*/}


            <div class="form-group mr-3">
                <label for="searchQuery" class="mr-2">UserID</label>
                <input type="text" name="term" id="searchQuery" class="form-control" onChange={props.handleId}/>
            </div>
            <div class="form-group mr-3">
                <label for="searchQuery" class="mr-2">Email</label>
                <input type="text" name="term" id="searchQuery" class="form-control" onChange={props.handleEmail}/>
            </div>
            <div class="form-group mr-3">
                <label for="searchQuery" class="mr-2">Password </label>
                <input type="text" name="term" id="searchQuery" class="form-control" onChange={props.handlePassword}/>
            </div>
        </div>
    );
}

function SignUpButton() {
    return (
        <button type="submit" class="btn submitBtn">
            <i className="fa-solid fa-right-to-bracket" aria-hidden="true"></i>SIGN UP
        </button>
    );
}