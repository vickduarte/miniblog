
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCJWhKtO8-KifKl4QwcLNqK1PUqi6giXjg",
    authDomain: "miniblog-4a4a8.firebaseapp.com",
    projectId: "miniblog-4a4a8",
    storageBucket: "miniblog-4a4a8.appspot.com",
    messagingSenderId: "1008810802830",
    appId: "1:1008810802830:web:d9c340b676fb8ae3d593df"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };