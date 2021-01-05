import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Actions from './Actions';
import Checkbox from '../shared/Checkbox';
import Date from './Date';
import Grip from '../shared/Grip';

const StyledTask = styled.li`
   position: relative;
   width: 100%;
   min-height: 40px;
   padding: 8px 0 8px 27px;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   cursor: pointer;
   border-bottom: 1px solid #f0f0f0;
   font-size: 14px;

   .content {
      width: 100%;
      height: 24px
   }

   .date {
      height: 16px
   }

   .grip {
      top: 2px;
      left: -32px;
   }

   &:hover {
      .grip {
         color: grey;
      }

      .actions {
         visibility: visible;
      }
   }

   .arrow-icon {
      top: 5px;
      left: 6px;
   }
`

function Task({ id, content, priority, endDate, completionDate, subTasks }) {
   return (
      <StyledTask>
         <Grip />
         <Checkbox priority={priority} />
         <span className="content">{content}</span>
         <Date />
         <Actions className="actions" />
      </StyledTask>
   )
}

Task.propTypes = {
   id: PropTypes.string.isRequired,
   content: PropTypes.string.isRequired,
   priority: PropTypes.number.isRequired,
   endDate: PropTypes.string,
   completionDate: PropTypes.string,
   subTasks: PropTypes.string
}

export default Task
