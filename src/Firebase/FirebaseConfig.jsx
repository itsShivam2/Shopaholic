// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8NiggxTgouB8JpFEaGkcgfW7BMcSJG-0",
  authDomain: "shopaholic-dedc6.firebaseapp.com",
  projectId: "shopaholic-dedc6",
  storageBucket: "shopaholic-dedc6.appspot.com",
  messagingSenderId: "971333819726",
  appId: "1:971333819726:web:2ae8cde15b98f1bb3b921f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };