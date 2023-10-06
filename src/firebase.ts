// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDjZfOPANsU4OS1nCXwQH32HCrkY9h4cY",
  authDomain: "praticeapp-10164.firebaseapp.com",
  databaseURL: "https://praticeapp-10164-default-rtdb.firebaseio.com",
  projectId: "praticeapp-10164",
  storageBucket: "praticeapp-10164.appspot.com",
  messagingSenderId: "135769240823",
  appId: "1:135769240823:web:fb1c3c92c1412992d80ff2",
  measurementId: "G-S44FLBEH8Q"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
export const firebaseStorage = getStorage(app);
export const db = getFirestore(app)

// const analytics = getAnalytics(app);