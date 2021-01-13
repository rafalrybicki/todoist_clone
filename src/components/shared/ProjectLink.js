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

function ProjectLink({ id, name }) {
   return (
      <StyledProjectLink
         to={ id ? "/project/" + id : "/inbox"}
         className="project-link"
      >
         {name ? <CircleFill size={8} /> : <InboxIcon />}
         {name ? name : 'Inbox'}
      </StyledProjectLink>
   )
}

ProjectLink.propTypes = {
   id: PropTypes.string,
   name: PropTypes.string,
   modal: PropTypes.bool
}

export default ProjectLink
