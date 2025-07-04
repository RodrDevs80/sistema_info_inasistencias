// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB98FnLKnbOEjYhauCNCQbgQj2M1Br0QvY",
    authDomain: "registroinasistencias-1ef7d.firebaseapp.com",
    projectId: "registroinasistencias-1ef7d",
    storageBucket: "registroinasistencias-1ef7d.firebasestorage.app",
    messagingSenderId: "376284891318",
    appId: "1:376284891318:web:11d807507b447520d03e17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);