import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addToCollection } from 'firebase/index.js';
import { addTask } from 'redux/actions';

import TaskEditor from './TaskEditor/TaskEditor';
import NewItemBtn from 'buttons/NewItemBtn';

function NewTask({ sectionId, projectId, date, nextOrder }) {
   const [openEditor, setOpenEditor] = useState(false);
   const userId = useSelector(state => state.user.id);
   const dispatch = useDispatch();

   const toggleEditor = () => {
      setOpenEditor(openEditor => !openEditor)
   }

   const add = async (obj) => {
      const task = {
         ...obj,
         ownerId: userId,
         order: nextOrder,
         completionDate: null,
         subtasks: {},
         subtasksQuantity: 0,
         completedSubtasksQuantity: 0
      };

      const id = await addToCollection('tasks', task);
      dispatch(addTask({id, ...task}));
   }

   if (openEditor) {
      return (
         <TaskEditor
            currentSectionId={sectionId}
            currentProjectId={projectId}
            currentTargetDate={date}
            onSave={add}
            onClose={toggleEditor}
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
