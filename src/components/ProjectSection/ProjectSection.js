import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { updateDocument } from '../../firebase';
import { dynamicSort } from 'utils';

import StyledProjectSection from './styled/ProjectSection';
import ProjectSectionEditor from './ProjectSectionEditor';
import Grip from 'components/Grip';
import IconBtn from 'components/appButtons/IconBtn';
import ChevronIcon from 'components/appIcons/ChevronIcon';
import ProjectSectionMenu from './ProjectSectionMenu';
import Task from 'components/Task/Task';
import NewTask from 'components/NewTask';
import NewProjectSection from './NewProjectSection';

function ProjectSection({ name, sectionId, projectId, isOpen, order, nextSiblingOrder, sortType, sortOrder }) {
   const tasks = useSelector(state => state.tasks.filter(task => task.projectId === projectId && task.sectionId === sectionId));
   const lastTaskOrder = tasks.length > 0 ? tasks[tasks.length - 1].order + 1 : 1;
   const [openEditor, setOpenEditor] = useState(false);

   const toggleEditor = () => {
      setOpenEditor(openEditor => !openEditor)
   }

   const updateSection = (obj) => {
      updateDocument('projects', projectId, {
         [`sections.${sectionId}`]: {
            id: sectionId,
            name,
            order,
            isOpen,
            ...obj
         }
      });

      setOpenEditor(false);
   } 

   const toggleIsOpen = () => {
      updateSection({ isOpen: !isOpen })
   }

   return (
      <StyledProjectSection>
         {openEditor &&
            <ProjectSectionEditor
               currentName={name}
               onSave={updateSection}
               onClose={toggleEditor}
            />
         }

         {sectionId !== 'default' && openEditor === false &&
            <header>
               <Grip />
               <IconBtn
                  hoverColor="#eee"
                  width="28px"
                  onClick={toggleIsOpen}
                  className="chevron"
               >
                  <ChevronIcon rotate={isOpen} />
               </IconBtn>
               <h2>{name}</h2>
               <ProjectSectionMenu
                  projectId={projectId}
                  sectionId={sectionId}
                  name={name}
                  isOpen={isOpen}
                  order={order}
                  nextOrder={(order + nextSiblingOrder) / 2}
                  edit={toggleEditor}
                  tasks={tasks}
               />
            </header>
         }

         {isOpen && <>
            <ul>
               {tasks.sort(dynamicSort(sortType, sortOrder)).map((task, index, array) => 
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
                     prevSiblingOrder={array[index - 1] ? array[index - 1].order : 0}
                     nextSiblingOrder={array[index + 1] ? array[index + 1].order : array[index].order + 1}
                  />
               )}
            </ul>

            <NewTask
               sectionId={sectionId}
               projectId={projectId}
               nextOrder={lastTaskOrder}
            />
         </>}

         <NewProjectSection
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