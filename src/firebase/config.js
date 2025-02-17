// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD15aTgO97MUYvT5HinpgCxkHi2MtKcius",
  authDomain: "react-cursos-d41d8.firebaseapp.com",
  projectId: "react-cursos-d41d8",
  storageBucket: "react-cursos-d41d8.firebasestorage.app",
  messagingSenderId: "487659961065",
  appId: "1:487659961065:web:0093e80d2ea862699e4e78"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

