// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "epsilenestate.firebaseapp.com",
  projectId: "epsilenestate",
  storageBucket: "epsilenestate.appspot.com",
  messagingSenderId: "177962932656",
  appId: "1:177962932656:web:359c17550ce47de42a1e75",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
