import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Editor from '../Editor';
import NewItemBtn from './buttons/NewItemBtn';

function NewTask({ sectionId, projectId}) {
   const [openEditor, setOpenEditor] = useState(false);
   const toggleEditor = () => setOpenEditor(openEditor => !openEditor)
   const addTask = (task) => {
      alert('task in console')
      console.log(task);
         // let newTask = {
      //    projectId,
      //    sectionId,
      //    ownerId: userId,
      //    priority: 4,
      //    targetDate: null,
      //    targetDateTime: null,
      //    completionDate: null,
      //    subTasks: [],
      //    comments: [],
      //    activity: []
      // }

      // const newTaskRef = db.collection('tasks').doc();
      // const id = newTaskRef.id

      // newTask = {
      //    id,
      //    ...newTask,
      //    ...obj
      // }
      
      // newTaskRef.set(newTask);
   }

   if (openEditor) {
      return (
         <Editor
            currentSectionId={sectionId}
            currentProjectId={projectId}
            onSave={addTask}
            onClose={toggleEditor}
            isTask
         />
      )
   }
      
   return (
      <NewItemBtn
         text="Add new task"
         onClick={toggleEditor}
      />
   )
}

NewTask.propTypes = {
   sectionId: PropTypes.string.isRequired,
   projectId: PropTypes.string.isRequired
}

export default NewTask
