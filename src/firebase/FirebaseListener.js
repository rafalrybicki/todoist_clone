import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { projectsCollection, tasksCollection } from './index.js';

import { addProject, editProject, deleteProject, addTask, editTask, deleteTask } from '../redux/actions';

function FirebaseListener() {
   const userId = useSelector(state => state.user.id);
   const dispatch = useDispatch();

   useEffect(() => {
      if (userId) {
         const projectsListener = projectsCollection.where('ownerId', '==', userId)
            .onSnapshot(function(snapshot) {
               snapshot.docChanges().forEach(function(change) {
                  if (change.type === "added") {
                     dispatch(addProject(change.doc.data()));
                  }
                  if (change.type === "modified") {
                     dispatch(editProject(change.doc.data()));
                  }
                  if (change.type === "removed") {
                     dispatch(deleteProject(change.doc.data().id));
                  }
               });
            });

         return () => projectsListener();
      }

   }, [userId])

   useEffect(() => {
      if (userId) {
         const tasksListener = tasksCollection.where('ownerId', '==', userId)
            .onSnapshot(function(snapshot) {
               snapshot.docChanges().forEach(function(change) {
                  if (change.type === "added") {
                     dispatch(addTask(change.doc.data()));
                  }
                  if (change.type === "modified") {
                     dispatch(editTask(change.doc.data()));
                  }
                  if (change.type === "removed") {
                     dispatch(deleteTask(change.doc.data().id));
                  }
               });
            });

         return () => tasksListener();
      }
   }, [userId])

   return null
}

export default FirebaseListener
