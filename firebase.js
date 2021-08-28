// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3pHkaOg6XET69kbiJOomiOsjFboc3ofQ",
  authDomain: "reddithigherlower.firebaseapp.com",
  projectId: "reddithigherlower",
  storageBucket: "reddithigherlower.appspot.com",
  messagingSenderId: "756144088904",
  appId: "1:756144088904:web:86695e53f354be6f88757d",
  measurementId: "G-CP1WXVH6LN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);