// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB2J5rr0Zz2lUvp0mw75_9BeYfS1eHF7X0",
  authDomain: "aswin-twitter.firebaseapp.com",
  databaseURL: "https://aswin-twitter.firebaseio.com",
  projectId: "aswin-twitter",
  storageBucket: "aswin-twitter.appspot.com",
  messagingSenderId: "328813037414",
  appId: "1:328813037414:web:29ce652e903209ca0beaa7",
  measurementId: "G-WHPPPFS68E"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
