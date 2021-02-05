import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import SelectorActivator from './styled/SelectorActivator';
import InboxIcon from 'icons/InboxIcon';
import { CircleFill } from 'react-bootstrap-icons';

function SectionSelectorActivator({ projectId, sectionId}) {
   const activeProject = useSelector(state => state.projects.find(project => project.id === projectId));
   const activeSection = activeProject.sections[sectionId];

   const activeProjectName = activeProject.name || '';
   const activeProjectColor = activeProject.color || '';
   const activeSectionName = activeSection.name || '';

   return (
      <SelectorActivator
         type="button"
         className="activator"
      >
         {activeProjectName === 'Inbox' ?
            <InboxIcon size={14} />
         :
            <CircleFill
               size={10}
               color={activeProjectColor}
            />
         }
         
         {activeProjectName} {activeSectionName !== 'default' &&  ' / ' + activeSectionName}
      </SelectorActivator>
   )
}

SectionSelectorActivator.propTypes = {
   projectId: PropTypes.string.isRequired,
   sectionId: PropTypes.string.isRequired,
}

export default SectionSelectorActivator
