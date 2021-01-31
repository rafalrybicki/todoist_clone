import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { addToCollection } from '../../firebase';

import Editor from '../Editor';
import NewItemBtn from './buttons/NewItemBtn';

function NewTask({ sectionId, projectId, date }) {
   const [openEditor, setOpenEditor] = useState(false);
   const userId = useSelector(state => state.user.id);

   const toggleEditor = () => {
      setOpenEditor(openEditor => !openEditor)
   }

   const addTask = (task) => {
      addToCollection('tasks', {
         ...task,
         ownerId: userId,
         completionDate: null,
         subTasks: [],
         comments: [],
         activity: []
      });
   }

   if (openEditor) {
      return (
         <Editor
            currentSectionId={sectionId}
            currentProjectId={projectId}
            currentTargetDate={date}
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
   projectId: PropTypes.string.isRequired,
   date: PropTypes.number
}

export default NewTask
