import PageTitle from "../../Shared/PageTitle/PageTitle";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from 'react';
import React from 'react';

//firebase
import { app } from '../../Shared/Firebase/firebase-config';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');
    const nav = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        let auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                
            })
            .catch((error) => {
                let code = error.code;
                let message = error.message;
                alert(`${code}: ${message}`);
            });

    };

    return (
        <div>
        <PageTitle title="Sign In" />
        <h1>Spotty</h1>
        <h2>(LOGO)</h2>
        <form class="form-inline" onSubmit={handleSubmit}>
            <div class="form-group mr-3">
                <label for="searchQuery" class="mr-2">UserID</label>
                <input type="text" name="term" id="searchQuery" class="form-control" onChange={(event) => setId(event.target.value)}/>
            </div>
            <div class="form-group mr-3">
                <label for="searchQuery" class="mr-2">Email</label>
                <input type="text" name="term" id="searchQuery" class="form-control" onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div class="form-group mr-3">
                <label for="searchQuery" class="mr-2">Password </label>
                <input type="text" name="term" id="searchQuery" class="form-control" onChange={(event) => setPassword(event.target.value)}/>
            </div>

            <button type="submit" class="btn btn-primary">
                <i className="fa-solid fa-right-to-bracket" aria-hidden="true">Sign Up</i>
            </button>
        </form>
    </div>
    );
}