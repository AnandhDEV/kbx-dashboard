// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLe2FbhrkNZNoMHFtdqIcSB7mGWpbeL8Y",
  authDomain: "kbx-realtime.firebaseapp.com",
  databaseURL:
    "https://kbx-realtime-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kbx-realtime",
  storageBucket: "kbx-realtime.appspot.com",
  messagingSenderId: "686798612161",
  appId: "1:686798612161:web:e14a940b606ed29ebc5640",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const fireStore = getFirestore(app);
