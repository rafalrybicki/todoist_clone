import React from 'react';
import { useSelector } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

import TaskModal from '../components/TaskModal';
import IconBtn from '../components/common/buttons/IconBtn';
import { ChatSquare, PersonPlus } from 'react-bootstrap-icons';
import SortSelector from '../components/common/selectors/SortSelector';
import OptionsBtn from '../components/common/buttons/OptionsBtn';
import SortWidget from '../components/common/SortWidget';
import ProjectSection from '../components/ProjectSection';

function Project({ match }) {
   const userId = useSelector(state => state.user.id);
   const projectId = match.params.projectId || userId;
   const project = useSelector(state => state.projects.find(project => project.id === projectId)) || [];
   const sections = project.sections ? Object.values(project.sections).sort((a, b) => a.order - b.order) : [];
   console.log(sections)
   return (
      <>
         <ProtectedRoute
            path={match.url + '/:taskId'}
            component={TaskModal}
         />
         <div className="view">
            <header>
               <h1>{project.name}</h1>
               <IconBtn tooltip="Comments" tooltipWidth="68px">
                  <ChatSquare className="chat-icon" size="18"/>
               </IconBtn>

               {projectId !== userId && 
                  <IconBtn tooltip="Share" tooltipWidth="44px">
                     <PersonPlus size="19"/>
                  </IconBtn>
               } 

               <SortSelector
                  sortType={project.sortType || 'order'}
                  projectId={project.id}
               />

               <OptionsBtn width="32px" />
            </header>

            {project && project.sortType !== 'order' && 
               <SortWidget
                  projectId={project.id}
                  sortType={project.sortType}
                  sortOrder={project.sortOrder}
               />
            }

            {sections.map((section, index, array) => 
               <ProjectSection
                  key={section.id}
                  name={section.name}
                  sectionId={section.id}
                  projectId={projectId}
                  isOpen={section.isOpen}
                  order={section.order}
                  nextSiblingOrder={array[index + 1] ? array[index + 1].order : 0 }
                  sortType={project.sortType}
                  sortOrder={project.sortOrder}
               />
            )}
         </div>
      </>
   )
}

export default Project
