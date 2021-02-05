import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import StyledProjectSelector from './styled/ProjectSelector';
import Popover from 'components/Popover';
import MenuList from 'components/MenuList';
import { ArrowRightCircle, CircleFill } from 'react-bootstrap-icons';
import InboxIcon from 'icons/InboxIcon';

function getNextOrder(sections) {
   let lastOrder = 0

   for (let key in sections) {
      if (sections[key].order > lastOrder) {
         lastOrder = sections[key].order
      }
   }
   return lastOrder + 1;
}

function ProjectSelector({ move }) {
   const projects = useSelector(state => state.projects) || [];

   return (
      <StyledProjectSelector listHeight={projects.length * 32}>
         <Popover
            activator={
               <span className="activator">
                  <ArrowRightCircle size={16} />
                  Move section
               </span>
            }
         >
            <MenuList>
               {projects.map(project => (
                  <li
                     key={project.id}
                     onClick={() => move(project.id, getNextOrder(project.sections))}
                  >
                     {project.name !== 'Inbox' ? 
                        <CircleFill
                           size={10}
                           color={project.color}
                           className="project-icon"
                        />
                        :
                        <InboxIcon size={14} />
                     }
                     {project.name}
                  </li>
               ))}
            </MenuList>
         </Popover>
      </StyledProjectSelector>
   )
}

ProjectSelector.propTypes = {
   move: PropTypes.func.isRequired
}

export default ProjectSelector
