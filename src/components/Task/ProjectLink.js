import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import InboxIcon from '../shared/icons/InboxIcon';
import { CircleFill } from 'react-bootstrap-icons';

const StyledProjectLink = styled(Link)`
   position: absolute;
   display: flex;
   align-items: center;
   color: #202020;

   &.modal__project-link {
      font-size: 13px;
      top:  25px;
      left: 24px;

      svg {
         margin: 2.5px 15px 0 4px;

         &.inbox-icon {
            margin: 2px 11px 0 2px;
         }
      }
   }

   &.task__project-link {
      font-size: 12px;
      bottom:  5px;
      right: 10px;

      svg {
         margin-right: 5px;
      }
   }

   &:hover {
      color: blue;
   }
`

function ProjectLink({ id, name, modal }) {
   return (
      <StyledProjectLink
         to={ id ? "/project/" + id : "/inbox"}
         className={modal ? 'modal__project-link' : 'task__project-link'}
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
