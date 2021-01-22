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

function ProjectLink({ path, name }) {
   const icon = name === 'Inbox' ? <CircleFill size={8} /> : <InboxIcon />;
   // id, color and name from redux because of Today view 

   return (
      <StyledProjectLink
         to={path}
         className="project-link"
      >
         {icon}
         {name}
      </StyledProjectLink>
   )
}

ProjectLink.propTypes = {
   id: PropTypes.string,
   projectName: PropTypes.string
}


export default ProjectLink
