import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { addToCollection, deleteFromCollection, firebase, updateDocument } from 'firebase/index.js';
import { v4 as uuid } from 'uuid';

import OptionsBtn from 'buttons/OptionsBtn';
import MenuList from 'components/MenuList';
import { Pen, Stickies, Trash } from 'react-bootstrap-icons';
import ProjectSelector from './ProjectSelector';

function ProjectSectionMenu({ projectId, sectionId, name, isOpen, nextOrder, edit, tasks }) {
   const [options, setOptions] = useState(false);

   const toggleOptions = () => {
      setOptions(options => !options)
   }

   const move = (targetProjectId, order) => {
      if (targetProjectId === projectId) {
         return
      }
      
      tasks.forEach(task => {
         updateDocument('tasks', task.id, {
            projectId: targetProjectId
         })
      })

      updateDocument('projects', targetProjectId, {
         [`sections.${sectionId}`]: {
            id: sectionId,
            name,
            isOpen,
            order
         }
      })

      updateDocument('projects', projectId, {
         [`sections.${sectionId}`]: firebase.firestore.FieldValue.delete()
      })
   }

   const duplicate = () => {
      const id = uuid();

      tasks.forEach(task => {
         addToCollection('tasks', {
            ...task,
            sectionId: id
         })
      })

      updateDocument('projects', projectId, {
         [`sections.${id}`]: {
            id,
            name,
            isOpen,
            order: nextOrder
         }
      })
   }

   const remove = () => {
      updateDocument('projects', projectId, {
         [`sections.${sectionId}`]: firebase.firestore.FieldValue.delete()
      })

      tasks.forEach(task => {
         deleteFromCollection('tasks', task.id)
      })
   }

   return (
      <div className="section-menu">
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
