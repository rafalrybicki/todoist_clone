import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Actions from './Actions';
import Checkbox from '../common/Checkbox';
import Date from './Date';
import Grip from '../common/Grip';
import { Link } from 'react-router-dom';
import ProjectLink from '../common/ProjectLink';

const StyledTask = styled.li`
   position: relative;
   width: 100%;
   min-height: 56px;
   padding: 0;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   cursor: pointer;
   border-bottom: 1px solid #f0f0f0;
   font-size: 14px;

   .link {
      display: block;
      width: 100%;
      height: 100%;
      padding: 4px 0 24px 27px;
   }

   .grip {
      top: 2px;
      left: -36px;
   }

   &:hover {
      .grip svg,.actions svg {
         color: grey;
      }
   }

   .checkbox {
      top: 9px;
   }

   .arrow-icon {
      top: 5px;
      left: 6px;
   }

   .project-link {
      font-size: 12px;
      bottom:  5px;
      right: 10px;

      svg {
         margin-right: 4px;
         margin-top: .8px;
      }
   }
`

function Task({ match, id, projectId, content, priority, endDate, completionDate, subTasks }) {
   const pathname = `${window.location.pathname}/${id}`;
   const state = {
      id,
      content,
      priority,
      endDate,
      completionDate,
      subTasks,
      prevPath: window.location.pathname
   }
   return (
      <StyledTask>
         <Grip />
         <Checkbox priority={priority} />
         <Link 
            to={{
               pathname,
               state
            }}
            className="link"
         >
            {content}
         </Link>
         <Actions />
         <Date />
         <ProjectLink name="ProjectName" id={projectId} />
      </StyledTask>
   )
}

Task.propTypes = {
   id: PropTypes.string.isRequired,
   content: PropTypes.string.isRequired,
   priority: PropTypes.number.isRequired,
   endDate: PropTypes.string,
   completionDate: PropTypes.string,
   subTasks: PropTypes.array
}

export default Task
