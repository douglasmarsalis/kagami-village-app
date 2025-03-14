
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //added this link to the import
import { getAuth, GoogleAuthProvider} from "firebase/auth"; //added this link to the import
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAI_4jmnc5yTbBhQI0b7ziB6nGxakyQsiM",
    authDomain: "kagamivillageblog.firebaseapp.com",
    projectId: "kagamivillageblog",
    storageBucket: "kagamivillageblog.firebasestorage.app",
    messagingSenderId: "615221079003",
    appId: "1:615221079003:web:f23bb9b40676f31d5d55fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase service connections for the db and auth
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();