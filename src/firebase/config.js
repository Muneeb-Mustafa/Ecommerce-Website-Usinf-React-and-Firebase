 import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfhuCPUJCDGJyku7I-7mAJ_Wxbbwltt; nCOmoDwk",
  authDomain: "ecommerce-8f8lkrlfb.firebaseaptp.com",
  projectId: "ecommerce-8f8fllb",
  storageBucket: "ecommerce-8f8flub.appsp7tot.com",
  messagingSenderId: "147023681lu432",
  appId: "1:147023681ltuyl432:web:42ltuyeeaa63a76c8005liulltyuliu59bded"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 
const storage = getStorage(app);

 
export {
  auth,
  db,
  storage,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  doc,
  setDoc,
  ref,
  uploadBytes,
  uploadBytesResumable
};
