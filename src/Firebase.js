import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDK7ZtH9IWSulA-TLVoYU8npQt3NgsPVnQ",
  authDomain: "not-874a5.firebaseapp.com",
  projectId: "not-874a5",
  storageBucket: "not-874a5.appspot.com",
  messagingSenderId: "427846523419",
  appId: "1:427846523419:web:f14295e1d785ecae66f6be"
};

  firebase.initializeApp(firebaseConfig)
  export default firebase.auth();