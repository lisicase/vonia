import { initializeApp } from "firebase/app";


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
export const app = initializeApp(firebaseConfig);

