import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import IconBtn from 'buttons/IconBtn';
import { ChevronLeft, Circle, ChevronRight } from 'react-bootstrap-icons';
import { months } from 'utils';

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

   .icon-btn {
      width: 24px;

      &:hover {
         background-color: #eee;
      }
   }
`

function CalendarHeader({ month, year, setMonth, setYear, reset }) {
   const today = new Date();
   const disablePrevMonth = new Date(`${year} ${month} 1`) < today;

   const setPrevMonth = () => {
      if (month === 1) {
         setYear(year - 1);
         setMonth(12);
      } else {
         setMonth(month - 1);
      }
   }

   const setNextMonth = () => {
      if (month === 12) {
         setYear(year + 1);
         setMonth(1);
      } else {
         setMonth(month + 1);
      }
   }

   return (
      <StyledCalendarHeader>
         <span className="date">
            {months[month -1 ]} {year}
         </span>
         <IconBtn
            onClick={setPrevMonth}
            disabled={disablePrevMonth}
         >
            <ChevronLeft size={10} />
         </IconBtn>
         <IconBtn
            onClick={reset}
         > 
            <Circle size={8} />
         </IconBtn>
         <IconBtn
            onClick={setNextMonth}
         >
            <ChevronRight size={10} />
         </IconBtn>
      </StyledCalendarHeader>
   )
}

CalendarHeader.propTypes = {
   month: PropTypes.number.isRequired,
   year: PropTypes.number.isRequired,
   setMonth: PropTypes.func.isRequired,
   setYear: PropTypes.func.isRequired,
   reset: PropTypes.func.isRequired
}

export default CalendarHeader
