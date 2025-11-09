import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your copied firebaseConfig object goes here
const firebaseConfig = {
  apiKey: "AIzaSyDfx900Zps5f_ZTw5ZNoK-VAzaa3rnWbmE",
  authDomain: "mastersolis-infotech-c1787.firebaseapp.com",
  projectId: "mastersolis-infotech-c1787",
   storageBucket: "mastersolis-infotech-c1787.firebasestorage.app",
  messagingSenderId: "632404800469",
  appId: "1:632404800469:web:1bc477f793c12c0bdc835c"

  // ... other keys
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it for use in other files
export const db = getFirestore(app);