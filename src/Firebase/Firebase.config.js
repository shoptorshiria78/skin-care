
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlSOhJ7_BgaV_DGZDci5eKsiTfKYgZxBQ",
  authDomain: "skin-care-b83af.firebaseapp.com",
  projectId: "skin-care-b83af",
  storageBucket: "skin-care-b83af.appspot.com",
  messagingSenderId: "9035612926",
  appId: "1:9035612926:web:277493abac9ff5181cdbaf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);