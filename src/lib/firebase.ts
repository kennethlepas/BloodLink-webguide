import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBmbgEyTbdFFFwpxaLYdX3rRwvoWSL1wQ0",
    authDomain: "bloodlink-app-b9297.firebaseapp.com",
    databaseURL: "https://bloodlink-app-b9297-default-rtdb.firebaseio.com",
    projectId: "bloodlink-app-b9297",
    storageBucket: "bloodlink-app-b9297.firebasestorage.app",
    messagingSenderId: "492859346824",
    appId: "1:492859346824:web:77dea9c3e8c6eb1376f43d",
    measurementId: "G-B55EDLVHF2"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
export default app;
