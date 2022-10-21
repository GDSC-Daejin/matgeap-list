// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBLOzdSqylXeqU60lhFaIn0KktTJMuXFFY',
  authDomain: 'gdsc-matgeap.firebaseapp.com',
  projectId: 'gdsc-matgeap',
  storageBucket: 'gdsc-matgeap.appspot.com',
  messagingSenderId: '1038326749273',
  appId: '1:1038326749273:web:12340e5f52a822ad603948',
  measurementId: 'G-CDB2R26K4J',
};

export const provider = new GoogleAuthProvider();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
export const auth = getAuth();
auth.languageCode = 'ko';

export const db = getFirestore(app);
