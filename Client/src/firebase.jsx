import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_Sv76gBPCoEvyt_Y35-_jqyWGd_71zRU",
  authDomain: "bloodline-app-257ff.firebaseapp.com",
  projectId: "bloodline-app-257ff",
  storageBucket: "bloodline-app-257ff.firebasestorage.app",
  messagingSenderId: "913270679176",
  appId: "1:913270679176:web:c88974b595ff54b2dba13d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);