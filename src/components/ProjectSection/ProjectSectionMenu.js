import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import { addToCollection, deleteFromCollection, firebase, updateDocument } from 'firebase/index.js';
import { addProjectSection, addTask, deleteProjectSection, deleteTask, updateTask } from 'redux/actions';
import useOutsideClick from 'hooks/useOutsideClick';

import OptionsBtn from 'buttons/OptionsBtn';
import MenuList from 'components/MenuList';
import { Pen, Stickies, Trash } from 'react-bootstrap-icons';
import ProjectSelector from './ProjectSelector';

function ProjectSectionMenu({ projectId, sectionId, name, isOpen, nextOrder, edit, tasks }) {
   const [options, setOptions] = useState(false);
   const dispatch = useDispatch();

   const sectionMenuRef = useRef(null);
   
   const toggleOptions = () => {
      setOptions(options => !options);
   }

   useOutsideClick(options, sectionMenuRef, toggleOptions);

   const move = (targetProjectId, order) => {
      if (targetProjectId === projectId) {
         return
      }
      
      tasks.forEach(task => {
         const field = {
            projectId: targetProjectId
         };

         updateDocument('tasks', task.id, field);
         dispatch(updateTask(task.id, field))
      });

      const section = {
         id: sectionId,
         name,
         isOpen,
         order
      };

      updateDocument('projects', targetProjectId, {
         [`sections.${sectionId}`]: section
      });

      dispatch(addProjectSection(targetProjectId, sectionId, section));

      updateDocument('projects', projectId, {
         [`sections.${sectionId}`]: firebase.firestore.FieldValue.delete()
      });
      dispatch(deleteProjectSection(projectId, sectionId));
   }

   const duplicate = () => {
      const sectionId = uuid();

      tasks.forEach(task => {
         const newTask = {
            ...task,
            sectionId
         };

         addToCollection('tasks', newTask);
         dispatch(addTask(newTask));
      });

      const newSection = {
         id: sectionId,
         name,
         isOpen,
         order: nextOrder
      };

      updateDocument('projects', projectId, {
         [`sections.${sectionId}`]: newSection
      });
      dispatch(addProjectSection(projectId, sectionId, newSection));
   }

   const remove = () => {
      updateDocument('projects', projectId, {
         [`sections.${sectionId}`]: firebase.firestore.FieldValue.delete()
      });

      dispatch(deleteProjectSection(projectId, sectionId));

      tasks.forEach(task => {
         deleteFromCollection('tasks', task.id);
         dispatch(deleteTask(task.id));
      });
   }

   return (
      <div
         ref={sectionMenuRef}
         className="section-menu"
      >
         <OptionsBtn onClick={toggleOptions} />
         {options &&
            <MenuList>
               <li onClick={edit}>
                  <Pen size={16} />
                  Edit section
               </li>
               <ProjectSelector
                  move={move}
               />
               <li onClick={duplicate}>
                  <Stickies size={15} />
                  Duplicate section
               </li>
               <li onClick={remove}>
                  <Trash size={16} />
                  Delete section
               </li>
            </MenuList>
         }
      </div>
   )
}

ProjectSectionMenu.propTypes = {
   projectId: PropTypes.string.isRequired,
   sectionId: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   isOpen: PropTypes.bool.isRequired,
   nextOrder: PropTypes.number.isRequired,
   edit: PropTypes.func.isRequired,
   tasks: PropTypes.array.isRequired,
}

export default ProjectSectionMenu
