import React from 'react';
import styled from 'styled-components/macro';

import CalendarHeader from './CalendarHeader';
import CalendarTable from './CalendarTable';

const StyledCalendar = styled.div`
   height: 203px;
   border-bottom: 1px solid #ddd;
`

function Calendar() {
   return (
      <StyledCalendar>
         <CalendarHeader />
         <CalendarTable />
      </StyledCalendar>
   )
}

export default Calendar
