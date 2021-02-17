import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC1GMhYzgilvhPmLMxng2byrQwKY3l8uVY',
  authDomain: 'clone-3ff85.firebaseapp.com',
  projectId: 'clone-3ff85',
  storageBucket: 'clone-3ff85.appspot.com',
  messagingSenderId: '152323007790',
  appId: '1:152323007790:web:697c27d137b4560c35c6bf',
  measurementId: 'G-NKG1NZCTFN',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
