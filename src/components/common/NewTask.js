import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { tasksCollection } from '../../firebase';

import Editor from '../Editor';
import NewItemBtn from './buttons/NewItemBtn';

function NewTask({ sectionId, projectId}) {
   const [openEditor, setOpenEditor] = useState(false);
   const userId = useSelector(state => state.user.id);

   const toggleEditor = () => {
      setOpenEditor(openEditor => !openEditor)
   }

   const addTask = (task) => {
      const newTaskRef = tasksCollection.doc();
      const id = newTaskRef.id;
   
      newTaskRef.set({
         id,
         ...task,
         ownerId: userId,
         completionDate: null,
         subTasks: [],
         comments: [],
         activity: []
      })
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
