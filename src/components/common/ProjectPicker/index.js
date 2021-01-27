import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import Popover from '../Popover';
import MenuList from '../MenuList';
import InboxIcon from '../icons/InboxIcon';
import { CircleFill } from 'react-bootstrap-icons';
import SectionListItem from './SectionListItem';

const StyledProjectPicker = styled.div`
   margin-right: auto;
   
   button {
      height: 28px;
      padding: 0 8px;
      border: 1px solid #ccc;
      border-radius: 3px;
      color: #555;

      svg {
         margin-right: 5px;

      }

      svg.inbox-icon {
         margin-bottom: -2px;
      }
   }

   button:hover, button:focus {
      background-color: #eee;
   }

   input {
      width: 100%;
      height: 35px;
      padding: 4px 10px;
   }

   .menu-list {
      width: 275px;
      max-height: 288px;
      overflow-y: auto;
      overflow-x: hidden;
   }
`

function mapProjectsToSections(projects) {
   const sections = [];

   for (let i = 0; i < projects.length; i++) {
      const projectAsDefaultSection = projects[i];

      sections.push({
         name: projectAsDefaultSection.name,
         projectId: projectAsDefaultSection.id,
         sectionId: 'default',
         color: projectAsDefaultSection.color,
         icon: projectAsDefaultSection.name !== 'Inbox' ? 'project' : 'inbox'
      })

      const projectSections = Object.values(projects[i].sections).sort((a, b) => a.order - b.order);

      for(let j = 1; j < projectSections.length; j++) {
         const section = projectSections[j];
         
         sections.push({
            name: section.name,
            projectId: projects[i].id,
            sectionId: section.id,
            icon: 'section'
         })
      }
   }
   
   return sections
}

function ProjectPicker({ projectId, setProjectId, sectionId, setSectionId }) {
   const projects = useSelector(state => state.projects);
   const sectionListItems = mapProjectsToSections(projects);

   const activeProject = projects.find(project => project.id === projectId);
   const activeSection = activeProject.sections[sectionId];

   const activeProjectName = activeProject.name || '';
   const activeProjectColor = activeProject.color || '';
   const activeSectionName = activeSection.name || '';

   const setSection = (projectId, sectionId) => {
      setProjectId(projectId);
      setSectionId(sectionId)
   }

   return (
      <StyledProjectPicker>
         <Popover
            activator={
               <button
                  type="button"
                  className="activator"
               >
                  {activeProjectName === 'Inbox' &&
                     <InboxIcon size={14} />
                  }
                  {activeProjectName !== 'Inbox' &&
                     <CircleFill
                        size={10}
                        color={activeProjectColor}
                     />
                  }
                  {activeProjectName} {activeSectionName !== 'default' &&  ' / ' + activeSectionName}
               </button>
            }
            content={
               <div>
                  <input type="text"/>
                  <MenuList>
                     {sectionListItems.map(item=>
                        <SectionListItem
                           key={item.sectionId + item.projectId}
                           name={item.name}
                           icon={item.icon}
                           color={item.color}
                           active={sectionId === item.sectionId && projectId === item.projectId}
                           onClick={() => setSection(item.projectId, item.sectionId)}
                        />
                     )}
                  </MenuList>
               </div>
            }
         />
      </StyledProjectPicker>
   )
}

ProjectPicker.propTypes = {
   projectId: PropTypes.string.isRequired,
   setProjectId: PropTypes.func.isRequired,
   sectionId: PropTypes.string.isRequired,
   setSectionId: PropTypes.func.isRequired,
}

export default ProjectPicker
