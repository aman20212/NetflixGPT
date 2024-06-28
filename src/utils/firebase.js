// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyYTUEFffGuUFxrffYb4WGwF3NOnYA2UU",
    authDomain: "netflixgpt-68f0a.firebaseapp.com",
    projectId: "netflixgpt-68f0a",
    storageBucket: "netflixgpt-68f0a.appspot.com",
    messagingSenderId: "676838138969",
    appId: "1:676838138969:web:d46a904a5b9ea20165fd48",
    measurementId: "G-01ZXQ6BYFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();