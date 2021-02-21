
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCohcrr1c3GJEMHfSbwjfcoFCYF5toEJD8",
    authDomain: "e-commerce-c894c.firebaseapp.com",
    databaseURL: "https://e-commerce-c894c-default-rtdb.firebaseio.com",
    projectId: "e-commerce-c894c",
    storageBucket: "e-commerce-c894c.appspot.com",
    messagingSenderId: "327778903470",
    appId: "1:327778903470:web:a41212fec4e555e5aad43f",
    measurementId: "G-8XLW83FSV0"

};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
