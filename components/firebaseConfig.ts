import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {initializeAuth, indexedDBLocalPersistence, browserLocalPersistence, browserSessionPersistence, browserPopupRedirectResolver, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import 'firebase/compat/analytics';
import { getStorage, ref } from 'firebase/storage';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);

const app = firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
})
// window.self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
export const auth = app.auth()
export default app

export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);