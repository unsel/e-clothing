
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC5g0G-9WZi9_G6E3AsTXlUetPNKdOhFTQ",
    authDomain: "crwn-db-e2108.firebaseapp.com",
    databaseURL: "https://crwn-db-e2108.firebaseio.com",
    projectId: "crwn-db-e2108",
    storageBucket: "crwn-db-e2108.appspot.com",
    messagingSenderId: "533274833341",
    appId: "1:533274833341:web:92366ab08b2e910e3ee2d4",
    measurementId: "G-145EJJGQ2F"
  };
  
  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;