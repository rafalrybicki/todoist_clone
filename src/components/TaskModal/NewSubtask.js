import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

import { updateDocument, firebase } from 'firebase/index.js';
import { addSubtask } from 'redux/actions';

import NewItemBtn from 'buttons/NewItemBtn';
import Editor from 'components/Editor';

function NewSubtask({ taskId, subtasksQuantity }) {
   const [openEditor, setOpenEditor] = useState(false);
   const dispatch = useDispatch();

   const toggleEditor = () => {
      setOpenEditor(openEditor => !openEditor)
   }

   const addNewSubtask = (content) => {
      const subtaskId = uuid();
      const subtask = {
         id: subtaskId,
         content,
         order: new Date().valueOf(),
         completionDate: null
      }
      updateDocument('tasks', taskId, {
         [`subtasks.${subtaskId}`]: subtask,
         subtasksQuantity: firebase.firestore.FieldValue.increment(1)
      });
      dispatch(addSubtask(taskId, subtask));
      toggleEditor()
   }

   if (openEditor) {
      return (
         <Editor
            onSave={addNewSubtask}
            onClose={toggleEditor}
            submitBtnText="Add subtask"
         />
      )
   }

   return (
      <NewItemBtn
         text="Add subtask"
         onClick={toggleEditor}
         className="new-subtask"
      /> 
   )
}

NewSubtask.propTypes = {
   taskId: PropTypes.string.isRequired,
   subtasksQuantity: PropTypes.number
}

export default NewSubtask
