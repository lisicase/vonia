// React
import React, { useState, Component } from 'react';
import { useNavigate } from "react-router-dom";
// Components
import { RedirectButton } from "../../StyleElements";
// Icons
import { BiUserCircle } from "react-icons/bi";
import { MdLockOutline } from "react-icons/md";
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
            <img src="logo192.png" />
            <SignInForm 
                handleSubmit={handleSubmit} 
                handleEmail={(event) => setEmail(event.target.value)} 
                handlePassword={(event) => setPassword(event.target.value)}
            />
        </div>
    );
}

class SignInForm extends Component {
    render() {
        return(
            <form class="form-inline" onSubmit={this.props.handleSubmit}>
                <div class="form-group mr-3">
                    <label for="searchQuery" class="mr-2"><BiUserCircle className="bufferedIcon" />Username</label>
                    <input type="text" name="term" id="searchQuery" class="form-control" onChange={this.props.handleEmail}/>
                </div>
                <div class="form-group mr-3">
                    <label for="searchQuery" class="mr-2"><MdLockOutline className="bufferedIcon" />Password </label>
                    <input type="text" name="term" id="searchQuery" class="form-control" onChange={this.props.handlePassword}/>
                </div>
                <p>Don't have an account? <strong className="actionBtn">Register Here</strong></p>
                <button type="submit" class="btn submitBtn">
                    <i className="fa-solid fa-right-to-bracket" aria-hidden="true"></i>LOGIN
                </button>
                <p>Forgot username or password?</p>
            </form>
        );
    }
}