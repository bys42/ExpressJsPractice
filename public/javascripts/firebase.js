import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: 'AIzaSyDfbLQvn8FEB4CnYTuhGiZgovdsluoD5mA',
    authDomain: 'expressjstest-1fe07.firebaseapp.com',
    databaseURL: 'https://expressjstest-1fe07-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'expressjstest-1fe07',
    storageBucket: 'expressjstest-1fe07.appspot.com',
    messagingSenderId: '905990383760',
    appId: '1:905990383760:web:5cae460a4fc0787b319015',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.firebase = {
    auth() {
        return {
            signInWithEmailAndPassword(email, password) {
                return signInWithEmailAndPassword(auth, email, password);
            },
            createUserWithEmailAndPassword(email, password) {
                return createUserWithEmailAndPassword(auth, email, password);
            },
        };
    },
};
