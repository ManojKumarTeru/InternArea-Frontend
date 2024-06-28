// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider}from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDix8WabNOBCbvgt2fkZe0gqvGHsHde06o",
  authDomain: "internarea-c010d.firebaseapp.com",
  projectId: "internarea-c010d",
  storageBucket: "internarea-c010d.appspot.com",
  messagingSenderId: "178299575103",
  appId: "1:178299575103:web:6dfab577a0bc8fbb96d18a",
  measurementId: "G-TBSJT5PBXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider}