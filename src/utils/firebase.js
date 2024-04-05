// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD668r9QM3k9CRYIDX0N3tRzX8xETbtmss",
  authDomain: "netflix-solaxes.firebaseapp.com",
  projectId: "netflix-solaxes",
  storageBucket: "netflix-solaxes.appspot.com",
  messagingSenderId: "312281803722",
  appId: "1:312281803722:web:4c53fd9610efddd6d6bd33",
  measurementId: "G-R70X587WMF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
