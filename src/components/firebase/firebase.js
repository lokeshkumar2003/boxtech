// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDn_9qccA3qTVlh9WvfWSTQynMoZi99dSo",
  authDomain: "boxtech-90855.firebaseapp.com",
  projectId: "boxtech-90855",
  storageBucket: "boxtech-90855.appspot.com",
  messagingSenderId: "422346738981",
  appId: "1:422346738981:web:dfbc019d27bc50f3991ecc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore();

export { auth, provider ,db };