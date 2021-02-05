import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Popover from 'components/Popover';
import MenuList from 'components/MenuList';
import SectionListItem from './SectionListItem';

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
      <Popover
         activator={children}
         className="section-selector"
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
   )
}

SectionSelector.propTypes = {
   projectId: PropTypes.string,
   sectionId: PropTypes.string,
   onChange: PropTypes.func.isRequired,
   children: PropTypes.node.isRequired
}

export default SectionSelector
