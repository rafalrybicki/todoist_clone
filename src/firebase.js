import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig  from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const usersCollection = db.collection('users')



auth.onAuthStateChanged((user) => {
   console.log("A U T H   S T A T E   C H A N G E D ! ! !")
   console.log(user)
})

export {
   auth,
   db,
   usersCollection
}