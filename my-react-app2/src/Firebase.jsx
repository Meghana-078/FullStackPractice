// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getAnalytics} from "firebase/analytics"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkEQSCvM4yz_eOPO1_47rGdUCIipz1rtE",
  authDomain: "auth-66e94.firebaseapp.com",
  projectId: "auth-66e94",
  storageBucket: "auth-66e94.firebasestorage.app",
  messagingSenderId: "713307471371",
  appId: "1:713307471371:web:87056fc50e194876e7110e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
const analytics=getAnalytics(app)
export const db =getFirestore(app)
export const auth=getAuth()