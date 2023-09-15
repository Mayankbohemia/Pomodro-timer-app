// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPTZtwzF6aaBT4DKp4ra0P-EWJi-P957Q",
  authDomain: "pomodro-timer-app-2db05.firebaseapp.com",
  projectId: "pomodro-timer-app-2db05",
  storageBucket: "pomodro-timer-app-2db05.appspot.com",
  messagingSenderId: "602666873020",
  appId: "1:602666873020:web:4cdb02036597be6a1aa0b9",
  measurementId: "G-BTLN2THZMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);