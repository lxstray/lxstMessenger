import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-8THbX69r3WRgG9gpxg5VumVc89YVWos",
  authDomain: "chat-b5eac.firebaseapp.com",
  projectId: "chat-b5eac",
  storageBucket: "chat-b5eac.appspot.com",
  messagingSenderId: "785884290063",
  appId: "1:785884290063:web:cf16f958393017cb63977a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
