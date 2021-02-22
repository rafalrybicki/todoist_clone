import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { addToCollection, deleteFromCollection, updateDocument } from 'firebase/index.js';
import { updateTask, addTask, deleteTask } from 'redux/actions';
import useOutsideClick from 'hooks/useOutsideClick';

import StyledTaskMenu from './styled/TaskMenu';
import OptionsBtn from 'buttons/OptionsBtn';
import { ArrowRightCircle, Pen, Stickies, Trash } from 'react-bootstrap-icons';
import PriorityOptions from './PriorityOptions';
import ScheduleOptions from './ScheduleOptions';
import SectionSelector from 'selectors/SectionSelector/SectionSelector';

function TaskMenu({ id, priority, currentDate, isDateTime, completionDate, nextOrder, projectId, edit }) {
   const [options, setOptions] = useState(false);
   const history = useHistory();
   const dispatch = useDispatch();
   const taskMenuRef = useRef(null);

   useOutsideClick(options, taskMenuRef, () => setOptions(false));

   const task = useSelector(state => state.tasks.find(task => task.id === id));

   const toggleOptions = () => {
      setOptions(options => setOptions(!options));
   }

   const setPriority = (priority) => {
      updateDocument('tasks', id, { priority });
      dispatch(updateTask(id, { priority }));
      toggleOptions();
   }

   const move = (projectId, sectionId) => {
      const fields = {
         projectId,
         sectionId,
         order: 0
      };

      updateDocument('tasks', id, fields);
      dispatch(updateTask(id, fields));
   }

   const duplicate = async () => {
      const newTask = {
         content: task.content,
         priority: task.priority,
         order: nextOrder,
         targetDate: task.targetDate,
         isDateTime: task.isDateTime,
         completionDate: task.completionDate,
         projectId: task.projectId,
         sectionId: task.sectionId,
         ownerId: task.ownerId,
         subTasks: []
      };

      const id = await addToCollection('tasks', newTask);
      dispatch(addTask({...task, id}));

      toggleOptions();
   }

   const remove = () => {
      deleteFromCollection('tasks', id);
      dispatch(deleteTask(id));
      history.replace('/project/' + projectId)
   }

   return (
      <StyledTaskMenu ref={taskMenuRef}>
         <OptionsBtn onClick={toggleOptions} />
         {options &&
            <ul>
               {completionDate === null && <>
                  <li onClick={edit}>
                     <Pen size={16} />
                     Edit task
                  </li>
                  <li className="selector">
                     <span>Schedule</span>
                     <ScheduleOptions 
                        id={id}
                        currentDate={currentDate}
                        isDateTime={isDateTime}
                        close={toggleOptions}
                     />
                  </li>
                  <li className="selector">
                     <span>Priority</span>
                     <PriorityOptions
                        priority={priority}
                        setPriority={setPriority}
                     />
                  </li>
                  <SectionSelector onChange={move}>
                     <li className="selector-activator">
                        <ArrowRightCircle size={16} />
                        Move to project
                     </li>
                  </SectionSelector>
                  <li onClick={duplicate}>
                     <Stickies size={15} />
                     Duplicate
                  </li>
               </>
               }
               <li onClick={remove}>
                  <Trash size={16} />
                  Delete task
               </li>
            </ul>
         }
      </StyledTaskMenu>
   )
}

TaskMenu.propTypes = {
   id: PropTypes.string.isRequired,
   priority: PropTypes.number.isRequired,
   currentDate: PropTypes.number,
   completionDate: PropTypes.number,
   nextOrder: PropTypes.number.isRequired,
   edit: PropTypes.func.isRequired,
}

export default TaskMenu
