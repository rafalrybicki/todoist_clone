import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { projectsCollection, tasksCollection } from '../firebase';

import { addProject, editProject, deleteProject, addTask, editTask, deleteTask } from '../redux/actions';

function FirebaseListener() {
   const userId = useSelector(state => state.user.id);
   const dispatch = useDispatch();

   useEffect(() => {
      if (!userId) {
         return
      }
      projectsCollection.where('ownerId', '==', userId)
         .onSnapshot(function(snapshot) {
            snapshot.docChanges().forEach(function(change) {
               if (change.type === "added") {
                  dispatch(addProject(change.doc.data()));
                  console.log('add project')
               }
               if (change.type === "modified") {
                  dispatch(editProject(change.doc.data()));
                  console.log('edit project')
               }
               if (change.type === "removed") {
                  dispatch(deleteProject(change.doc.data().id));
                  console.log('delete project')
               }
            });
      });

      return () => projectsCollection();

   }, [userId, dispatch])

   useEffect(() => {
      if (!userId) {
         return
      }
      tasksCollection.where('ownerId', '==', userId)
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

      return () => projectsCollection();

   }, [userId, dispatch])

   return null
}

export default FirebaseListener
