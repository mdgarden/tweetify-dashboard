// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6JodCkOdvw3AnKX8FKzPIm9opsCo9WDY",
  authDomain: "tweetify-dashboard.firebaseapp.com",
  projectId: "tweetify-dashboard",
  storageBucket: "tweetify-dashboard.appspot.com",
  messagingSenderId: "654428392008",
  appId: "1:654428392008:web:fc84090335b4db6e35a67d",
  measurementId: "G-PFMQS0S1V4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
