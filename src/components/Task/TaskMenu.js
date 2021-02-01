import React from 'react';
import PropTypes from 'prop-types';

import { addToCollection, deleteFromCollection, updateDocument } from '../../firebase';

import MenuList from '../common/MenuList';
import { ArrowDownShort, ArrowRightCircle, ArrowUpShort, Pen, Stickies, Trash } from 'react-bootstrap-icons';
import Selector from './Selector';
import Priority from './Priority';
import Schedule from './Schedule';

function TaskMenu(props) {
   const {
      id,
      content,
      priority,
      order,
      targetDate,
      isDateTime,
      completionDate,
      projectId,
      sectionId,
      ownerId,
      subTasks,
      edit
   } = props;

   const deleteTask = () => {
      deleteFromCollection('tasks', id)
   }

   const setPriority = (priority) => {
      updateDocument('tasks', id, { priority })
   }

   const duplicate = () => {
      addToCollection('tasks', {
         content,
         priority,
         order: order + (Math.random * 0.1),
         targetDate,
         isDateTime,
         completionDate,
         projectId,
         sectionId,
         ownerId,
         subTasks
      })
   }
   
   return (
      <MenuList>
         <li>
            <ArrowUpShort
               size={26}
               className="arrow-icon"
            />
            Add task above
         </li>
         <li>
            <ArrowDownShort
               size={26}
               className="arrow-icon"
            />
            Add task below
         </li>
         <li onClick={edit}>
            <Pen size={17} />
            Edit task
         </li>
         <Selector>
            <span>Schedule</span>
            <Schedule />
         </Selector>
         <Selector>
            <span>Priority</span>
            <Priority
               priority={priority}
               setPriority={setPriority}
            />
         </Selector>
         <li>
            <ArrowRightCircle size={17} />
            Move to project
         </li>
         <li onClick={duplicate}>
            <Stickies size={17} />
            Duplicate
         </li>
         <li onClick={deleteTask}>
            <Trash size={17} />
            Delete task
         </li>
      </MenuList>
   )
}

TaskMenu.propTypes = {
   id: PropTypes.string.isRequired,
   content: PropTypes.string.isRequired,
   priority: PropTypes.number.isRequired,
   order: PropTypes.number.isRequired,
   targetDate: PropTypes.number,
   isDateTime: PropTypes.bool.isRequired,
   completionDate: PropTypes.string,
   projectId: PropTypes.string.isRequired,
   sectionId: PropTypes.string.isRequired,
   ownerId: PropTypes.string.isRequired,
   subTasks: PropTypes.array.isRequired,
   edit: PropTypes.func.isRequired,
}

export default TaskMenu
