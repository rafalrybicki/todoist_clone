import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { updateDocument, firebase } from 'firebase/index.js';
import { v4 as uuid } from 'uuid';

import NewItemBtn from 'buttons/NewItemBtn';
import Editor from 'components/Editor';

function NewSubtask({ taskId }) {
   const [openEditor, setOpenEditor] = useState(false);

   const toggleEditor = () => {
      setOpenEditor(openEditor => !openEditor)
   }

   const addSubtask = (content) => {
      const id = uuid();

      updateDocument('tasks', taskId, {
         [`subtasks.${id}`]: {
            id,
            content,
            order: new Date().valueOf(),
            completionDate: null
         },
         subtasksQuantity: firebase.firestore.FieldValue.increment(1)
      });

      toggleEditor()
   }

   if (openEditor) {
      return (
         <Editor
            onSave={addSubtask}
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
   taskId: PropTypes.string.isRequired
}

export default NewSubtask
