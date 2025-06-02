// firebaseConfig.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRlAWQ3xgk8Qld0FakUtA_AeSEdaoubus",
  authDomain: "myweb-2905.firebaseapp.com",
  projectId: "myweb-2905",
  storageBucket: "myweb-2905.firebasestorage.app",
  messagingSenderId: "601504722212",
  appId: "1:601504722212:web:d46037e85a9b98c95b17b1",
//   measurementId: "G-9KEYQJWN5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword };