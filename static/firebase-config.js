import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, 
         GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9b65fsGtwu9PSfvSd5sAjoHmfF9Dd4wU",
  authDomain: "forms2-e0642.firebaseapp.com",
  projectId: "forms2-e0642",
  storageBucket: "forms2-e0642.firebasestorage.app",
  messagingSenderId: "668902835491",
  appId: "1:668902835491:web:71d55c4dcdde7b7f257896",
  measurementId: "G-JYGSHXX47C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { auth, provider, db };