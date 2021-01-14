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

function Calendar() {
   const today = getDate();
   const [year, setYear] = useState(today.year);
   const [month, setMonth] = useState(today.month);
   const [miliseconds, setMiliseconds] = useState(0);

   const firstDay = getFirstDayOfTheMonth(month, year);
   const lastDay = getLastDayOfTheMonth(month, year);
   const monthArr = getMonth(month, year);

   const reset = () => {
      setYear(today.year);
      setMonth(today.month);
      setMiliseconds(0);
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
                        active={day.miliseconds === miliseconds}
                        onClick={() => setMiliseconds(day.miliseconds)}
                        disabled={day.miliseconds < firstDay || day.miliseconds > lastDay}
                     />
                  )}
               </tr>
            )}
         </Month>
      </StyledCalendar>
   )
}

export default Calendar
