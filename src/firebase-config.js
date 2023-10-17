// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPJn7laa7ctRZai--pLcY3lsN1tFSfSR8",
  authDomain: "assingment-10-cliend-side.firebaseapp.com",
  projectId: "assingment-10-cliend-side",
  storageBucket: "assingment-10-cliend-side.appspot.com",
  messagingSenderId: "420292617796",
  appId: "1:420292617796:web:84fb22758aa81af1607e11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);