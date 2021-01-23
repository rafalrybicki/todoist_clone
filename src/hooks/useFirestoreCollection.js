import { useState, useEffect } from 'react';
import { db } from '../firebase';

function useFirestoreCollection(collectionName, condition) {
   const [tasks, setTasks] = useState([]);

   useEffect(() => {
      const collection = db.collection(collectionName)
         .where(condition[0], condition[1], condition[2])
         .onSnapshot(function(snapshot) {
            snapshot.docChanges().forEach(function(change) {
               if (change.type === "added") {
                  console.log("ADD");
                  console.log( change.doc.data());
                  addTask(change.doc.data());
               }
               if (change.type === "modified") {
                  console.log("MODIFIED")
                  changeTask(change.doc.data())
               }
               if (change.type === "removed") {
                  console.log("REMOVED")
                  removeTask(change.doc.data().id);
               }
            });
      });

      return () => collection();
   }, [])

   const addTask = (newTask) => {
      setTasks(tasks => [...tasks, newTask])
   }

   const changeTask = (changedTask) => {
      setTasks(tasks => tasks.map(el => el.id === changedTask.id ? changedTask : el));
   }

   const removeTask = (id) => {
      setTasks(tasks => tasks.filter(el => el.id !== id));
   }
   
   return tasks;
}

export default useFirestoreCollection