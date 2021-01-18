import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import firebaseConfig  from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();

export {
   auth,
   db
}

