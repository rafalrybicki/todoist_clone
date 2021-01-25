import { useState, useEffect } from 'react';
import { db } from '../firebase';

function useFirestoreCollection(collectionName, condition0, condition1, condition2) {
   const [tasks, setTasks] = useState([]);

   useEffect(() => {
      const collection = db.collection(collectionName)
      if(condition2) {
         collection.where(condition0, condition1, condition2)
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
      }
      return () => collection();
   }, [collectionName, condition0, condition1, condition2])

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