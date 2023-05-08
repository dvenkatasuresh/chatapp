import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJ20DpAUpU3vIqT5LxjNmXwKHiVyvW2D4",
  authDomain: "cloudsecuritychatapp.firebaseapp.com",
  projectId: "cloudsecuritychatapp",
  storageBucket: "cloudsecuritychatapp.appspot.com",
  messagingSenderId: "177666995517",
  appId: "1:177666995517:web:8a3e51734c056ffaccc154",
  measurementId: "G-HJR9ZZJN9V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
