import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD6ZbnRSyXkEir4daTvQBScuXZm4_5qrc8",
    authDomain: "cell-store-ea044.firebaseapp.com",
    projectId: "cell-store-ea044",
    storageBucket: "cell-store-ea044.appspot.com",
    messagingSenderId: "122066321587",
    appId: "1:122066321587:web:3526b5db797be87b1af0c6"
    };

    const app = initializeApp(firebaseConfig);

    export const getFirebase = () => app;

    export { getFirestore };