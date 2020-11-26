import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA8waZAOC0v_r5dzYKnMKxEluSeypyH1LU",
    authDomain: "login-app-c85b9.firebaseapp.com",
    databaseURL: "https://login-app-c85b9.firebaseio.com",
    projectId: "login-app-c85b9",
    storageBucket: "login-app-c85b9.appspot.com",
    messagingSenderId: "891270284049",
    appId: "1:891270284049:web:271c56eb97106932e982b0"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }