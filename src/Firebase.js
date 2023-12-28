// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBASoA1mtYyqUk_IVn-FKf10xQLnOI8YVQ",
  authDomain: "gym-firebase-f8ed4.firebaseapp.com",
  projectId: "gym-firebase-f8ed4",
  storageBucket: "gym-firebase-f8ed4.appspot.com",
  messagingSenderId: "505007728460",
  appId: "1:505007728460:web:6a9d58b3d80e7f969ad1e9",
  measurementId: "G-0RVZE5S39S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


