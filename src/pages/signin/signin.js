import PageTitle from "../../Shared/PageTitle/PageTitle";
import { useState } from 'react';
import React from 'react';

//firebase
import { app } from '../../Shared/firebase/firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'


export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const auth = getAuth();

        console.log(email);
        console.log(password);

        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => console.log(res));
    };

    return (
        <div>
            <PageTitle title="Sign In" />
            <h1>Spotty</h1>
            <h2>(LOGO)</h2>
            <form class="form-inline" onSubmit={handleSubmit}>
                <div class="form-group mr-3">
                    <label for="searchQuery" class="mr-2">Email</label>
                    <input type="text" name="term" id="searchQuery" class="form-control" onChange={(event) => {
                        console.log(event.target.value);
                        setEmail(event.target.value);
                        }}/>
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