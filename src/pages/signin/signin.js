// React
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// Components
import { RedirectButton } from "../../StyleElements";

//firebase
import { app } from '../../Shared/firebase/firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default function SignInPage(props) {
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
                    props.updateUserId("test_id");
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
            <div style={{textAlign:"left"}}>
                <RedirectButton redirectTo="/" button={<i className="open-details fa fa-chevron-left" aria-hidden="true"></i>} />
                <h1>Sign In</h1>
            </div>
            <h1>Spotty</h1>
            <h2>(LOGO)</h2>
            <form class="form-inline" onSubmit={handleSubmit}>
                <div class="form-group mr-3">
                    <label for="searchQuery" class="mr-2">Email</label>
                    <input type="text" name="term" id="searchQuery" class="form-control" onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div class="form-group mr-3">
                    <label for="searchQuery" class="mr-2">Password </label>
                    <input type="text" name="term" id="searchQuery" class="form-control" onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <button type="submit" class="btn btn-primary">
                    <i className="fa-solid fa-right-to-bracket" aria-hidden="true"></i>Sign In
                </button>
            </form>
            <p>Forgot your ID or password?</p>
        </div>
    );
}