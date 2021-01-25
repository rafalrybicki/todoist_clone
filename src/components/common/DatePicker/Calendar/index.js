import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { getDate, getMonth, getFirstDayOfTheMonth, getLastDayOfTheMonth } from '../../../../utils'
import Header from './Header';
import Month from './Month';
import Day from './Day'

const StyledCalendar = styled.div`
   height: 203px;
   border-bottom: 1px solid #ddd;
`

function Calendar({ currentDate, setDate }) {
   const date = currentDate ? getDate(currentDate) : getDate();
   const today = getDate();
   const miliseconds = date.miliseconds;
   const [year, setYear] = useState(date.year);
   const [month, setMonth] = useState(date.month);
   // const [miliseconds, setMiliseconds] = useState(date.valueOf());

   const firstDay = getFirstDayOfTheMonth(month, year);
   const lastDay = getLastDayOfTheMonth(month, year);
   const monthArr = getMonth(month, year);

   const reset = () => {
      setDate(null);
      const today = getDate()
      setYear(today.year)
      setMonth(today.month)
   }

   return (
      <StyledCalendar>
         <Header
            month={month}
            year={year}
            setYear={setYear}
            setMonth={setMonth}
            reset={reset}
         />
         <Month
            month={month}
            year={year}
            miliseconds={miliseconds}
         >
            {monthArr.map(week => 
               <tr key={week[0].miliseconds}>
                  {week.map(day => 
                     <Day
                        key={day.miliseconds}
                        number={day.day}
                        active={day.miliseconds === miliseconds && currentDate > 0}
                        onClick={() => setDate(day.miliseconds)}
                        disabled={day.miliseconds < firstDay || day.miliseconds > lastDay || day.miliseconds < today.miliseconds}
                     />
                  )}
               </tr>
            )}
         </Month>
      </StyledCalendar>
   )
}

export default Calendar
