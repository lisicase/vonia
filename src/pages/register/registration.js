import PageTitle from "../../Shared/PageTitle/PageTitle";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import React from 'react';

//firebase
import { app } from '../../Shared/firebase/firebase-config';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';


export default function RegistrationPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const nav = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        let auth = getAuth();
        console.log(auth.currentUser);
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                sessionStorage.setItem('Auth Token', res.__tokenResponse.refreshToken);
                console.log(sessionStorage.getItem('Auth Token'));
                if (sessionStorage.getItem('Auth Token')) {
                    updateProfile(auth.currentUser, {
                        displayName: name
                        //photoURL: 
                    })
                        .then(() => {
                            console.log("successfully updated account");
                            nav('/');
                        })
                        .catch((error) => {
                            console.log('throwing line 34');
                            let code = error.code;
                            let message = error.message;
                            alert(`Error ${code}: ${message}. Please try again`);
                        });
                }
            })
            .catch((error) => {
                console.log('throwing line 42');

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
            <PageTitle title="Sign Up" />
            <h1>Spotty</h1>
            <h2>(LOGO)</h2>
            <form class="form-inline" onSubmit={handleSubmit}>
                <div class="form-group mr-3">
                    <label for="searchQuery" class="mr-2">Display Name</label>
                    <input type="text" name="term" id="searchQuery" class="form-control" onChange={(event) => setName(event.target.value)} />
                </div>
                <div class="form-group mr-3">
                    <label for="searchQuery" class="mr-2">Email</label>
                    <input type="text" name="term" id="searchQuery" class="form-control" onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div class="form-group mr-3">
                    <label for="searchQuery" class="mr-2">Password </label>
                    <input type="text" name="term" id="searchQuery" class="form-control" onChange={(event) => setPassword(event.target.value)} />
                </div>

                <button type="submit" class="btn btn-primary">
                    <i className="fa-solid fa-right-to-bracket" aria-hidden="true">Sign Up</i>
                </button>
            </form>
        </div>
    );
}