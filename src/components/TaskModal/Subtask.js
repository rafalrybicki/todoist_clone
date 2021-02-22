import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { updateDocument, firebase} from 'firebase/index.js';
import { deleteSubtask, updateSubtask, updateTask } from 'redux/actions';

import StyledSubtask from './styled/Subtask';
import Editor from 'components/Editor';
import Checkbox from 'components/Checkbox';
import Popover from 'components/Popover';
import OptionsBtn from 'buttons/OptionsBtn';
import MenuList from 'components/MenuList';
import { Pen, Trash } from 'react-bootstrap-icons';

function Subtask({ id, content, completionDate, order, taskId, subtasksQuantity, completedSubtasksQuantity }) {
   const [openEditor, setOpenEditior] = useState(false);
   const dispatch = useDispatch();

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
         dispatch(updateSubtask(taskId, id, {completionDate: null}));
         dispatch(updateTask(taskId, {completedSubtasksQuantity: completedSubtasksQuantity -= 1}));
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
         dispatch(updateSubtask(taskId, id, {completionDate: new Date().valueOf()}));
         dispatch(updateTask(taskId, {completedSubtasksQuantity: completedSubtasksQuantity += 1}));
      }
   }

   const edit = (content) => {
      const subtask = {
         id,
         content,
         completionDate,
         order,
      };

      updateDocument('tasks', taskId, {
         [`subtasks.${id}`]: subtask
      });

      dispatch(updateSubtask(taskId, id, subtask));

      toggleEditor()
   }

   const remove = () => {
      if (completionDate > 0) {
         updateDocument('tasks', taskId, {
            [`subtasks.${id}`]: firebase.firestore.FieldValue.delete(),
            subtasksQuantity: firebase.firestore.FieldValue.increment(-1),
            completedSubtasksQuantity: firebase.firestore.FieldValue.increment(-1)
         });
         dispatch(deleteSubtask(taskId, id, true));
         dispatch(updateTask(taskId, {
            subtasksQuantity: subtasksQuantity -= 1,
            completedSubtasksQuantity: completedSubtasksQuantity -= 1
         }));
      } else {
         updateDocument('tasks', taskId, {
            [`subtasks.${id}`]: firebase.firestore.FieldValue.delete(),
            subtasksQuantity: firebase.firestore.FieldValue.increment(-1)
         });
         dispatch(deleteSubtask(taskId, id, false));
         dispatch(updateTask(taskId, {subtasksQuantity: subtasksQuantity -= 1}));
      }
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

Subtask.propTypes = {
   id: PropTypes.string.isRequired,
   content: PropTypes.string.isRequired,
   order: PropTypes.number.isRequired,
   taskId: PropTypes.string.isRequired,
   subtasksQuantity: PropTypes.number.isRequired,
   completedSubtasksQuantity: PropTypes.number.isRequired
}

export default Subtask
