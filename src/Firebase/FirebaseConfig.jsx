// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FireBase_APIKEY,
  authDomain: "blogginssite.firebaseapp.com",
  projectId: "blogginssite",
  storageBucket: "blogginssite.appspot.com",
  messagingSenderId: import.meta.env.VITE_FireBase_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FireBase_APPID,
  measurementId: import.meta.env.VITE_MeasurementID,
};

// Initialize Firebase:32377880956:web:e132ea74ff1aea93f724f9
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDB, auth, storage };
