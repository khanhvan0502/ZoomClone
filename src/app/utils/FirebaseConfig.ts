// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkILfARuNkXMKLC-Yu4krQdC5evtm-Faw",
  authDomain: "zoom-clone-bbf26.firebaseapp.com",
  projectId: "zoom-clone-bbf26",
  storageBucket: "zoom-clone-bbf26.appspot.com",
  messagingSenderId: "839016604109",
  appId: "1:839016604109:web:73a2881ef13a4152d96484",
  measurementId: "G-DYQ3SF1PEV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const userRef = collection(firebaseDB, "users");
export const meetingRef = collection(firebaseDB, "meetings");
