// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn6MSIuqA3v5U7PPXrqv54WlKDnNYfW9o",
  authDomain: "car-agency-59057.firebaseapp.com",
  projectId: "car-agency-59057",
  storageBucket: "car-agency-59057.appspot.com",
  messagingSenderId: "539190969679",
  appId: "1:539190969679:web:21ed981775874dc6f8313a",
  measurementId: "G-6KWZ15NEVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth};
