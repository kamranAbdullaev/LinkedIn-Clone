// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6KLmY0jgORZGhqUE0CmAQIGQpkLwL8Y8",
  authDomain: "linkedin-clone-a9087.firebaseapp.com",
  projectId: "linkedin-clone-a9087",
  storageBucket: "linkedin-clone-a9087.appspot.com",
  messagingSenderId: "299859256725",
  appId: "1:299859256725:web:7d50355f2326c97ad2829c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
