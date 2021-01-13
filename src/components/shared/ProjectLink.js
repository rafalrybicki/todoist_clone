import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import InboxIcon from './icons/InboxIcon';
import { CircleFill } from 'react-bootstrap-icons';

const StyledProjectLink = styled(Link)`
   position: absolute;
   display: flex;
   align-items: center;
   color: #202020;
   
   &:hover {
      color: blue;
   }
`

function ProjectLink({ id, projectName = 'Inbox' }) {
   const pathname = id ? "/project/" + id : "/inbox";

   const icon = id ? <CircleFill size={8} /> : <InboxIcon />;

   return (
      <StyledProjectLink
         to={pathname}
         className="project-link"
      >
         {icon}
         {projectName}
      </StyledProjectLink>
   )
}

ProjectLink.propTypes = {
   id: PropTypes.string,
   projectName: PropTypes.string
}


export default ProjectLink
