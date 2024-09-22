// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOorTefsyn0lZobL5CC1bEyPeHd9Nv9oU",
  authDomain: "personal-finance-tracker-d3e81.firebaseapp.com",
  projectId: "personal-finance-tracker-d3e81",
  storageBucket: "personal-finance-tracker-d3e81.appspot.com",
  messagingSenderId: "33298010138",
  appId: "1:33298010138:web:d73a30e1b5ff2df211c1a3",
  measurementId: "G-BJFB34EZGN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
