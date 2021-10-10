import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";


const initializeFirebaseApp = () => {

    const app = initializeApp(firebaseConfig);
}

export default initializeFirebaseApp;