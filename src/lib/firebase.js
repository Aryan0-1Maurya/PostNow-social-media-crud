import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
   apiKey: "AIzaSyCca26qIexM72QTLzGGGJcMoHJ0o644_h0",
  authDomain: "create-post-social.firebaseapp.com",
  projectId: "create-post-social",
  storageBucket: "create-post-social.appspot.com",
  messagingSenderId: "526859699328",
  appId: "1:526859699328:web:acd5acce776c40e0465265"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
