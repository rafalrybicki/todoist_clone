import React from 'react';
import styled from 'styled-components/macro';

import { CalendarEvent } from 'react-bootstrap-icons';
import { getTaskDate } from '../../utils';

const StyledTaskDate = styled.span`
   display: block;
   font-size: 12px;
   color: navy;
   height: 16px;

   svg {
      margin-right: 3px;
   }
`

function TaskDate({ targetDate, isDateTime }) {
   return (
      <StyledTaskDate className="task-date">
         <CalendarEvent size={10.5} />
         {getTaskDate(targetDate, isDateTime)}
      </StyledTaskDate>
   )
}

export default TaskDate
