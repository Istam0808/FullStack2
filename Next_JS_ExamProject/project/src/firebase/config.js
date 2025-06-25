'use client';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyCHF-6ee4iVDcILu38V5sQyH4OiBnsIvkA",
    authDomain: "nextexamproj.firebaseapp.com",
    projectId: "nextexamproj",
    storageBucket: "nextexamproj.firebasestorage.app",
    messagingSenderId: "948483523323",
    appId: "1:948483523323:web:61bf7bb95cda85a16b665e",
    measurementId: "G-2TC31DLHSC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Analytics only on the client side
let analytics = null;
if (typeof window !== 'undefined') {
    // Check if analytics is supported before initializing
    isSupported().then(supported => {
        if (supported) {
            analytics = getAnalytics(app);
        }
    });
}

export { analytics };