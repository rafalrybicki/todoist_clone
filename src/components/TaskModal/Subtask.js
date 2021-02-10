import React, { useState } from 'react';

import { updateDocument, firebase} from 'firebase/index.js';

import StyledSubtask from './styled/Subtask';
import Editor from 'components/Editor';
import Checkbox from 'components/Checkbox';
import Popover from 'components/Popover';
import OptionsBtn from 'buttons/OptionsBtn';
import MenuList from 'components/MenuList';
import { Pen, Trash } from 'react-bootstrap-icons';

function Subtask({ id, content, completionDate, order, taskId }) {
   const [openEditor, setOpenEditior] = useState(false);

   const toggleEditor = () => {
      setOpenEditior(openEditor => !openEditor)
   }

   const toggleCompletion = () => {
      if (completionDate > 0) {
         updateDocument('tasks', taskId, {
            [`subtasks.${id}`]: {
               id,
               content,
               completionDate: null,
               order,
            },
            completedSubtasksQuantity: firebase.firestore.FieldValue.increment(-1)
         });
      } else {
         updateDocument('tasks', taskId, {
            [`subtasks.${id}`]: {
               id,
               content,
               completionDate: new Date().valueOf(),
               order,
            },
            completedSubtasksQuantity: firebase.firestore.FieldValue.increment(1)
         });
      }
   }

   const edit = (content) => {
      updateDocument('tasks', taskId, {
         [`subtasks.${id}`]: {
            id,
            content,
            completionDate,
            order,
         }
      });

      toggleEditor()
   }

   const remove = () => {
      if (completionDate > 0) {
         updateDocument('tasks', taskId, {
            [`subtasks.${id}`]: firebase.firestore.FieldValue.delete(),
            completedSubtasksQuantity: firebase.firestore.FieldValue.increment(-1)
         })
      }
      updateDocument('tasks', taskId, {
         [`subtasks.${id}`]: firebase.firestore.FieldValue.delete(),
         subtasksQuantity: firebase.firestore.FieldValue.increment(-1)
      })
   }

   if (openEditor) {
      return (
         <Editor
            currentContent={content}
            onSave={edit}
            onClose={toggleEditor}
         />
      )
   }

   return (
      <StyledSubtask>
         <Checkbox
            priority={4}
            isCompleted={completionDate > 0}
            onClick={toggleCompletion}
         />
         <span className="content">{content}</span>
         <Popover
            activator={
               <OptionsBtn />
            }
         >
            <MenuList>
               <li onClick={toggleEditor}>
                  <Pen size={16} /> Edit
               </li>
               <li onClick={remove}>
                  <Trash size={16} />Delete
               </li>
            </MenuList>
         </Popover>
      </StyledSubtask>
   )
}

export default Subtask
