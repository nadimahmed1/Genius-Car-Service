// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoYKLxg-ZTZY7cFgAdqrUqIgB49GR8Q58",
    authDomain: "genius-car-service-5d353.firebaseapp.com",
    projectId: "genius-car-service-5d353",
    storageBucket: "genius-car-service-5d353.appspot.com",
    messagingSenderId: "225687956465",
    appId: "1:225687956465:web:11848d95f25e6b4a867250"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;