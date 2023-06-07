import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDLQpnV0uhnmAJqjzTGh2pW4E5qrNT2tFk",
    authDomain: "ranked-a2300.firebaseapp.com",
    projectId: "ranked-a2300",
    storageBucket: "ranked-a2300.appspot.com",
    messagingSenderId: "915053991492",
    appId: "1:915053991492:web:74f9b2ce112e1c7d7d4e11",
    measurementId: "G-XWTCD1HBN0"
};


const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);