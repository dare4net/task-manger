// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyBuLpCva5wWLVTKlePcYLmEWF4PrgMFc",
  authDomain: "after-school-tech.firebaseapp.com",
  projectId: "after-school-tech",
  storageBucket: "after-school-tech.firebasestorage.app",
  messagingSenderId: "925955358701",
  appId: "1:925955358701:web:9acbf3375041eb0dbf71e4",
  measurementId: "G-3JC7F69C0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);