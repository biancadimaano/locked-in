// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRrAp7Ih16Y3dkW17AVP21bIk59CVpt0Q",
  authDomain: "locked-in-3c806.firebaseapp.com",
  projectId: "locked-in-3c806",
  storageBucket: "locked-in-3c806.firebasestorage.app",
  messagingSenderId: "71241740787",
  appId: "1:71241740787:web:e199e5d6e01c34dd31a286",
  measurementId: "G-XYL1EF3EDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);