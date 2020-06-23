import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyAA26LjXDBzTZxsMaujqTXAnbkiFAtqMOY',
  authDomain: 'crwn-db-305dd.firebaseapp.com',
  databaseURL: 'https://crwn-db-305dd.firebaseio.com',
  projectId: 'crwn-db-305dd',
  storageBucket: 'crwn-db-305dd.appspot.com',
  messagingSenderId: '241573911807',
  appId: '1:241573911807:web:e2df72ace368d9e17a80ca',
  measurementId: 'G-M7Y87FVY2K',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
