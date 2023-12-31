import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDa0QUFoboEJTw-mvjZgszIXitPCTq_1cI",
  authDomain: "oct-demo-1010c.firebaseapp.com",
  projectId: "oct-demo-1010c",
  storageBucket: "oct-demo-1010c.appspot.com",
  messagingSenderId: "120897141603",
  appId: "1:120897141603:web:ace8f0a2a79c7ae20c7156"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);