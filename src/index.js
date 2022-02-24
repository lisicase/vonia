import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
//firebase

import 'firebase/auth';
import 'firebase/database';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABZx_0B15UsoLInwOJhfkTZuFRa4-ASfQ",
  authDomain: "spotty-a8e30.firebaseapp.com",
  databaseURL: "https://spotty-a8e30-default-rtdb.firebaseio.com",
  projectId: "spotty-a8e30",
  storageBucket: "spotty-a8e30.appspot.com",
  messagingSenderId: "589465109564",
  appId: "1:589465109564:web:ceabc124742b369ee42f39",
  measurementId: "G-CLY8B68X50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);