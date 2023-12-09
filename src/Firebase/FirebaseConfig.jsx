// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FireBase,
  authDomain: "blogginssite.firebaseapp.com",
  projectId: "blogginssite",
  storageBucket: "blogginssite.appspot.com",
  messagingSenderId: "32377880956",
  appId: "1:32377880956:web:e132ea74ff1aea93f724f9",
  measurementId: "G-Y2PVXQ92K5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDB, auth, storage };
