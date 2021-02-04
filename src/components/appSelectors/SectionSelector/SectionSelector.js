import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Popover from '../../Popover';
import MenuList from '../../MenuList';
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

   .menu-list {
      width: 250px;
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

function SectionSelector({ projectId, sectionId, onChange, children }) {
   const projects = useSelector(state => state.projects);
   const sectionListItems = mapProjectsToSections(projects);

   return (
      <StyledProjectPicker className="section-selector">
         <Popover
            activator={children}
         >
            <MenuList>
                  {sectionListItems.map(item=>
                     <SectionListItem
                        key={item.sectionId + item.projectId}
                        name={item.name}
                        icon={item.icon}
                        color={item.color}
                        active={sectionId === item.sectionId && projectId === item.projectId}
                        onClick={() => onChange(item.projectId, item.sectionId)}
                     />
                  )}
               </MenuList>
         </Popover>
      </StyledProjectPicker>
   )
}

SectionSelector.propTypes = {
   projectId: PropTypes.string.isRequired,
   sectionId: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   children: PropTypes.node.isRequired
}

export default SectionSelector
