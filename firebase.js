import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyDKgmdr70zK6x-6L8Y_aY__Tg7jetm6fw0",
  authDomain: "clone-6274c.firebaseapp.com",
  projectId: "clone-6274c",
  storageBucket: "clone-6274c.appspot.com",
  messagingSenderId: "935662046901",
  appId: "1:935662046901:web:cd7c0aa0c063a767bc38fc",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
