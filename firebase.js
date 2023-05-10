// Import the Firebase SDK
import firebase from "firebase/app";
import "firebase/database";

// Initialize Firebase with your project's credentials
firebase.initializeApp(firebaseConfig);

// Connect to your database
const database = firebase.database();
