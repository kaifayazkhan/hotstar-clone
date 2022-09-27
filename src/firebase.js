// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAO335otS2D5inXElJoQlqqe6SG0YsB_TY",
    authDomain: "disney-plus-hotstar-clon-d1049.firebaseapp.com",
    projectId: "disney-plus-hotstar-clon-d1049",
    storageBucket: "disney-plus-hotstar-clon-d1049.appspot.com",
    messagingSenderId: "345926488857",
    appId: "1:345926488857:web:e8b5b7ccc86884d39e6b88"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(auth);
const storage = firebase.storage;

export { auth, provider, storage };
export default db;
