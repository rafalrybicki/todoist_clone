import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { getDate, getMonth, getFirstDayOfTheMonth, getLastDayOfTheMonth } from 'utils'
import CalendarHeader from './CalendarHeader';
import CalendarMonth from './CalendarMonth';
import CalendarDay from './CalendarDay'

const StyledCalendar = styled.div`
   height: auto;
   border-bottom: 1px solid #ddd;
`

function Calendar({ currentDate, setDate }) {
   const today = getDate();
   const date = currentDate ? getDate(currentDate) : today;
   const miliseconds = date.miliseconds;
   const [year, setYear] = useState(date.year);
   const [month, setMonth] = useState(date.month);
   const firstDay = getFirstDayOfTheMonth(month, year);
   const lastDay = getLastDayOfTheMonth(month, year);
   const monthArr = getMonth(month, year);

   const reset = () => {
      setYear(today.year)
      setMonth(today.month)
   }

   return (
      <StyledCalendar>
         <CalendarHeader
            month={month}
            year={year}
            setYear={setYear}
            setMonth={setMonth}
            reset={reset}
         />
         <CalendarMonth
            month={month}
            year={year}
            miliseconds={miliseconds}
         >
            {monthArr.map(week => 
               <tr key={week[0].miliseconds}>
                  {week.map(day => 
                     <CalendarDay
                        key={day.miliseconds}
                        number={day.day}
                        active={day.miliseconds === miliseconds && currentDate >= today.miliseconds}
                        disabled={day.miliseconds < firstDay || day.miliseconds > lastDay || day.miliseconds < today.miliseconds}
                        onClick={() => setDate(day.miliseconds)}
                     />
                  )}
               </tr>
            )}
         </CalendarMonth>
      </StyledCalendar>
   )
}

Calendar.propTypes = {
   currentDate: PropTypes.number,
   setDate: PropTypes.func.isRequired
}

export default Calendar
