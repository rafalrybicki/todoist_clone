import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import InboxIcon from 'icons/InboxIcon';
import { CircleFill } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';

const StyledProjectLink = styled(Link)`
   z-index: 10;
   
   svg {
      margin-right: 4px;

      &.inbox-icon {
         margin-bottom: -1px;
      }
   }

   &:hover {
      color: blue;
   }
`

function ProjectLink({ projectId }) {
   const project = useSelector(state => state.projects.find(project => project.id === projectId));
   const inobxId = useSelector(state => state.user.id);

   const path = project.id === inobxId ? '/inbox' : '/project/' + project.id
   const icon = project.id === inobxId ? <InboxIcon size={12} /> : <CircleFill size={9} color={project.color} />;
   

   return (
      <StyledProjectLink
         to={path}
         className="project-link"
      >
         {icon}
         {project.name}
      </StyledProjectLink>
   )
}

ProjectLink.propTypes = {
   projectId: PropTypes.string.isRequired
}


export default ProjectLink
