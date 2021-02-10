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

const addToCollection = (collectionName, newDocument) => {
   const ref = db.collection(collectionName).doc();
   const id = ref.id;

   ref.set({
      ...newDocument,
      id,
   })
}

const deleteFromCollection = (collectionName, documentId) => {
   db.collection(collectionName).doc(documentId).delete()
      .then(() => true)
      .catch(e => e.message)
}

const updateDocument = (collectionName, documentId, obj) => {
   db.collection(collectionName).doc(documentId).update(obj)
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
   deleteFromCollection,
   updateDocument
}