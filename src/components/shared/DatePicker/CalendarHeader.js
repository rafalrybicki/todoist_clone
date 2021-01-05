import React from 'react';
import styled from 'styled-components/macro';

import IconBtn from '../shared/IconBtn';
import { ChevronLeft, Circle, ChevronRight} from 'react-bootstrap-icons';

const StyledCalendarHeader = styled.div`
   display: flex;
   align-items: center;
   height: 32px;
   padding: 0 8px 0 12px;

   .date {
      font-size: 13px;
      font-weight: bold;
      margin-right: auto;
   }
`

function CalendarHeader() {
   return (
      <StyledCalendarHeader>
         <span className="date">
            Dec 2020
         </span>
         <IconBtn width="24px" hoverColor="#eee" disabled={true}>
            <ChevronLeft size={10} />
         </IconBtn>
         <IconBtn width="24px" hoverColor="#eee">
            <Circle size={8} />
         </IconBtn>
         <IconBtn width="24px" hoverColor="#eee">
            <ChevronRight size={10} />
         </IconBtn>
      </StyledCalendarHeader>
   )
}

export default CalendarHeader
