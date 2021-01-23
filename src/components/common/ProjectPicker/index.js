import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import useFirestoreCollection from '../../../hooks/useFirestoreCollection';

import { auth } from '../../../firebase';

import Popover from '../Popover';
import InboxIcon from '../icons/InboxIcon';
import MenuList from '../MenuList';
import { ViewList, CircleFill } from 'react-bootstrap-icons';

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
         margin-bottom: -1.5px;
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

      .project svg.inbox-icon {
         top: 8px;
      }

      .project svg {
         top: 12px;
      }

      .section {
         padding-left: 45px;

         svg {
            left: 20px;
            top: 10px;
         }
      }
   }
`

function ProjectPicker({ projectId, setProjectId, sectionId, setSectionId }) {
   const projects = useFirestoreCollection('projects', ['ownerId', '==', auth.currentUser.uid]);
   const sortedProjects = projects.sort((a, b) => a.order - b.order);
   const options = [];

   const activeProject = projects.find(project => project.id === projectId);
   const projectName = activeProject ? activeProject.name : '';
   const projectColor = activeProject ? activeProject.color : '';
   const sectionName = (activeProject  && sectionId) ? activeProject.sections[sectionId].name : '';

   const setProject = (projectId) => {
      setProjectId(projectId);
      setSectionId(null)
   }

   const setSection = (projectId, sectionId) => {
      setProjectId(projectId);
      setSectionId(sectionId)
   }

   sortedProjects.map(project => {
      options.push(
         <li
            onClick={() => setProject(project.id)}
            className={project.id === projectId ? "active project" : "project"}
         >
            {project.name === 'Inbox' ? <InboxIcon  size={14} /> : <CircleFill size={10} color={project.color} />}
            {project.name}
         </li>
      )
      Object.values(project.sections).map(section => {
         options.push(
            <li
               onClick={() => setSection(project.id, section.id)}
               className={section.id === sectionId ? "active section" : "section"}
            >
               <ViewList size={16} />
               {section.name}
            </li>
         )
      })
   })

   return (
      <StyledProjectPicker>
         <Popover
            activator={
               <button
                  type="button"
                  className="activator"
               >
                  {projectName === 'Inbox' ? <InboxIcon  size={14} /> : <CircleFill size={10} color={projectColor} />}
                  {projectName} {sectionName &&  ' / ' + sectionName }
               </button>
            }
            content={
               <div>
                  <input type="text"/>
                  <MenuList>
                     {options}
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
