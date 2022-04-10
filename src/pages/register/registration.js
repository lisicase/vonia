// React
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from 'react';
import React from 'react';
// Components
import { RedirectButton, Logo } from "../../StyleElements";
// Icons
import { BiUserCircle } from "react-icons/bi";
import { MdLockOutline, MdOutlineMail } from "react-icons/md";
//firebase
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default function RegistrationPage() {
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
            <div style={{ textAlign: "left" }}>
                <RedirectButton redirectTo="/" button={<i className="open-details fa fa-chevron-left" aria-hidden="true"></i>} />
                <h1>Welcome to Spotty!</h1>
            </div>
            <Logo />
            <RegisterForm 
                handleSubmit={handleSubmit}
                handleId={(event) => setId(event.target.value)}
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
                        <label for="searchQuery" class="mr-2"><BiUserCircle className="bufferedIcon" size={30} style={{ height: '2rem' }} /></label>
                        <input placeholder="Display Name" type="text" name="term" id="searchQuery" class="form-control" onChange={props.handleId} />
                    </div>
                    <div class="form-group mr-3" style={{ display: 'flex' }}>
                        <label for="searchQuery" class="mr-2"><MdOutlineMail className="bufferedIcon" size={30} style={{ height: '2rem' }} /></label>
                        <input placeholder="Email" type="text" name="term" id="searchQuery" class="form-control" onChange={props.handleEmail} />
                    </div>
                    <div class="form-group mr-3" style={{ display: 'flex' }}>
                        <label for="searchQuery" class="mr-2"><MdLockOutline className="bufferedIcon" size={30} style={{ height: '2rem' }} /></label>
                        <input placeholder="Password" type="text" name="term" id="searchQuery" class="form-control" onChange={props.handlePassword} />
                    </div>
                </div>
            </div>

            <div style={{ marginTop: "20vw" }}>
                <SignUpButton />
            </div>
        </form>
    );
}

/*function SignInForm(props) {
    return (
        <form class="form-inline" onSubmit={props.handleSubmit}>
            <div style={{ textAlign: "left", display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
                <div style={{ width: "15vw" }} />
                <div style={{ width: "70vw" }}>
                    <AccountInputBoxes handleEmail={props.handleEmail} handlePassword={props.handlePassword} />
                    <p className="textCenter">Don't have an account? <strong className="actionBtn">Register Here</strong></p>
                </div>
            </div>
            <div style={{ marginTop: "20vw" }}>
                <SignUpButton />
            </div>
        </form>
    );
}*/

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