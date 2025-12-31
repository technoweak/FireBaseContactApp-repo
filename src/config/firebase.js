// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDue153DXmbRNfpKZYVMpmgoE_ib-8ZF-8",
  authDomain: "vite-contact-29646.firebaseapp.com",
  projectId: "vite-contact-29646",
  storageBucket: "vite-contact-29646.firebasestorage.app",
  messagingSenderId: "855483968202",
  appId: "1:855483968202:web:84ed0a7c64406f9b7b6233"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);