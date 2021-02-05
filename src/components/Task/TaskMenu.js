import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { addToCollection, deleteFromCollection, updateDocument } from 'firebase/index.js';

import StyledTaskMenu from './styled/TaskMenu';
import OptionsBtn from 'buttons/OptionsBtn';
import { ArrowRightCircle, Pen, Stickies, Trash } from 'react-bootstrap-icons';
import PriorityOptions from './PriorityOptions';
import ScheduleOptions from './ScheduleOptions';
import SectionSelector from 'selectors/SectionSelector/SectionSelector';

function TaskMenu({ id, priority, currentDate, isDateTime, nextOrder, edit }) {
   const [options, setOptions] = useState(false);

   const task = useSelector(state => state.tasks.find(task => task.id === id));

   const toggleOptions = () => {
      setOptions(options => setOptions(!options))
   }

   const setPriority = (priority) => {
      updateDocument('tasks', id, { priority });
      toggleOptions();
   }

   const move = (projectId, sectionId) => {
      updateDocument('tasks', id, {
         projectId,
         sectionId,
         order: 0
      });
   }

   const duplicate = () => {
      addToCollection('tasks', {
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
      });

      toggleOptions();
   }

   const deleteTask = () => {
      deleteFromCollection('tasks', id)
   }

   return (
      <StyledTaskMenu>
         <OptionsBtn onClick={toggleOptions} />
         {options &&
            <ul>
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
               <li onClick={deleteTask}>
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
   nextOrder: PropTypes.number.isRequired,
   edit: PropTypes.func.isRequired,
}

export default TaskMenu
