// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh4O-eeMxtdX8zLWUqQ4zZohiMKsE_-9s",
  authDomain: "ecomm-db-b8671.firebaseapp.com",
  projectId: "ecomm-db-b8671",
  storageBucket: "ecomm-db-b8671.appspot.com",
  messagingSenderId: "51834585924",
  appId: "1:51834585924:web:99dbacd8215a9b126c0d11",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
