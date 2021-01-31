import fb from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig  from './firebaseConfig';

const firebase = fb;
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');
const projectsCollection = db.collection('projects');
const tasksCollection = db.collection('tasks');

// console.log('------- FIREBASE------')
// console.log(firebase.apps)

// auth.onAuthStateChanged((user) => {
//    console.log("A U T H   S T A T E   C H A N G E D ! ! !")
//    console.log(user)
// })
// console.log('----------------------')

const addToCollection = (collectionName, newDocument) => {
   const ref = db.collection(collectionName).doc();
   const id = ref.id;

   ref.set({
      id,
      ...newDocument
   })
}

const deleteFromCollection = (collectionName, collectionName) => {
   db.collection(collectionName).doc(collectionName).delete()
      .then(() => true)
      .catch(e => e.message)
}

export {
   firebase,
   auth,
   db,
   usersCollection,
   projectsCollection,
   tasksCollection,
   addToCollection,
   deleteFromCollection
}