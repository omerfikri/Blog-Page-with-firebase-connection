import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyltMd-zBdBT1-sQKv42DGf7a-sW2tyOI",
  authDomain: "blog-ee06b.firebaseapp.com",
  projectId: "blog-ee06b",
  storageBucket: "blog-ee06b.appspot.com",
  messagingSenderId: "117542492649",
  appId: "1:117542492649:web:da903816c85f02b1651378",
};

// Firebase uygulamasını başlatın
const firebaseApp = initializeApp(firebaseConfig);

// Firestore bağlantısını alın
const db = getFirestore(firebaseApp);

const timestamp = serverTimestamp();

export { db, timestamp };
