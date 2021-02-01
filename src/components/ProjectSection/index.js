import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { addToCollection, firebase, updateDocument } from '../../firebase';
import { v4 as uuid } from 'uuid';

import Editor from '../Editor';
import Grip from '../common/Grip';
import IconBtn from '../common/buttons/IconBtn';
import ChevronIcon from '../common/icons/ChevronIcon';
import SectionMenu from './SectionMenu';
import Task from '../Task';
import NewTask from '../common/NewTask';
import NewSection from './NewSection';
import { dynamicSort } from '../../utils';

const StyledProjectSection = styled.section`
   position: relative;
   width: 100%;
   padding-bottom: 20px;

   header {
      display: flex;
      border-bottom: 1px solid #f0f0f0;

      .grip {
         top: -4px;
         left: -60px;

         &:hover {
            background-color: #eee;
         }
      }
      
      .chevron {
         position: absolute;
         top: -4px;
         left: -32px;

         svg {
            color: grey;
         }

         &:hover {
            svg {
               color: #202020
            }
         }
      }

      h2{
         font-size: 14px;
         margin: 0 5px 5px 0;
         flex-grow: 1;
      }

      &:hover {
         .grip {
            color: grey;
         }
      }
   }
`

function ProjectSection({ name, sectionId, projectId, isOpen, order, nextSiblingOrder, sortType, sortOrder }) {
   const tasks = useSelector(state => state.tasks.filter(task => task.projectId === projectId && task.sectionId === sectionId));
   const [openEditor, setOpenEditor] = useState(false);

   const toggleEditor = () => {
      setOpenEditor(openEditor => !openEditor)
   }

   const updateSection = (obj) => {
      const sectionsUpdate = {};

      sectionsUpdate[`sections.${sectionId}`] = {
         id: sectionId,
         name,
         order,
         isOpen,
         ...obj
      };

      updateDocument('projects', projectId, sectionsUpdate);

      setOpenEditor(false);
   } 

   const edit = (name) => {
      updateSection({ name })
   }

   const remove = () => {
      updateDocument('projects', projectId, {
         [`sections.${sectionId}`]: firebase.firestore.FieldValue.delete()
      })
   }

   const toggleSectionOpening = () => {
      updateSection({ isOpen: !isOpen })
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
            order: (order + nextSiblingOrder) / 2
         }
      })
   }

   return (
      <StyledProjectSection isOpen={isOpen}>
         {openEditor &&
            <Editor
               currentContent={name}
               onSave={edit}
               onClose={toggleEditor}
            />
         }

         {sectionId !== 'default' && openEditor === false &&
            <header>
               <Grip />
               <IconBtn
                  hoverColor="#eee"
                  width="28px"
                  onClick={toggleSectionOpening}
                  className="chevron"
               >
                  <ChevronIcon rotate={isOpen} />
               </IconBtn>
               <h2>{name}</h2>
               <SectionMenu
                  openEditor={toggleEditor}
                  remove={remove}
                  duplicate={duplicate}
               />
            </header>
         }

         {isOpen && tasks.sort(dynamicSort(sortType, sortOrder)).map( task => 
            <Task
               key={task.id}
               id={task.id}
               content={task.content}
               priority={task.priority}
               order={task.order}
               targetDate={task.targetDate}
               isDateTime={task.isDateTime}
               completionDate={task.completionDate}
               projectId={task.projectId}
               sectionId={task.sectionId}
               ownerId={task.ownerId}
               subTasks={task.subTasks}
            />
         )}

         {isOpen &&
            <NewTask
               sectionId={sectionId}
               projectId={projectId}
            />
         }

         <NewSection
            projectId={projectId}
            order={nextSiblingOrder === 0 ? order + 1 : (order + nextSiblingOrder) / 2}
         />
      </StyledProjectSection>
   )
}

ProjectSection.propTypes = {
   name: PropTypes.string.isRequired,
   sectionId: PropTypes.string.isRequired,
   projectId: PropTypes.string.isRequired,
   isOpen: PropTypes.bool.isRequired,
   order: PropTypes.number.isRequired,
   nextSiblingOrder: PropTypes.number.isRequired,
   sortType: PropTypes.oneOf([
      'order', 'date', 'priority', 'content', 'assignee', 'custom'
   ]).isRequired,
   sortOrder: PropTypes.oneOf([
      'asc', 'desc'
   ]).isRequired
}

export default ProjectSection