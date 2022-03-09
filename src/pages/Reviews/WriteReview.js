// React
import React, { useState, Component } from 'react';
import { useNavigate } from "react-router-dom";
// Components
import { RedirectButton, Logo } from "../../StyleElements";
// Icons
import { BiUserCircle } from "react-icons/bi";
import { MdLockOutline } from "react-icons/md";
//firebase
import { app } from '../../Shared/firebase/firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function WriteReview(props) {
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
            <div style={{ textAlign: "left" }}>
                <RedirectButton redirectTo="/" button={<i className="open-details fa fa-chevron-left" aria-hidden="true"></i>} />
                <h1>Write a Review</h1>
            </div>
            <ReviewForm />
        </div>
    );
}

class ReviewForm extends Component {
    render() {
        return (
            <form class="form-inline">
                <div style={{ textAlign: "left", display: 'flex', flexDirection: 'row'}}>
                    <div style={{ margin:'2rem'}}>
                    <h3>Rating</h3>
                    <div class="form-group mr-3" style={{ display: 'flex' }}>
                        <input type="text" name="term" id="searchQuery" class="form-control" />
                    </div>
                    <h3>Bathroom Type</h3>
                    <div class="form-group mr-3" style={{ display: 'flex' }}>
                        <input type="text" name="term" id="searchQuery" class="form-control" />
                    </div>
                    <h3>Title</h3>
                    <div class="form-group mr-3" style={{ display: 'flex' }}>
                        <input type="text" name="term" id="searchQuery" class="form-control" />
                    </div>
                    <h3>Content</h3>
                    <div class="form-group mr-3" style={{ display: 'flex' }}>
                        <input type="text" name="term" id="searchQuery" class="form-control" />
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "20vw" }}>
                <SubmitButton />
            </div>
        </form>
        );
    }
}

class SubmitButton extends Component {
    render() {
        return (
            <button type="submit" class="btn submitBtn">
                <i className="fa-solid fa-right-to-bracket" aria-hidden="true"></i>SUBMIT
            </button>
        );
    }
}