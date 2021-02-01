import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import { getDate, getWeek, months, scrollToElement } from '../utils';
import { ChevronDown } from 'react-bootstrap-icons';
import WeekControls from '../components/Upcoming/WeekControls';
import Week from '../components/Upcoming/Week';
// import Day from '../components/Upcoming/Day';

const StyledUpcoming = styled.div`
   header {
      flex-direction: column;

      h1 svg {
         color: grey;
         margin-left: 5px;
         margin-bottom: 1px;
      }

      &:before, &:after {
         position: absolute;
         top: 0;
         display: block;
         height: 100%;
         width: 55px;
         content: '';
         background-color: white;
      }

      &:before {
         left:-55px;
      }

      &:after {
         right: -55px;
      }
   }
`

function Upcoming() {
   const initialDate = getDate();
   const initialWeek = getWeek();
   const initialMiliseconds = initialDate.miliseconds;

   const [index, setIndex] = useState(1); // change index - currunet is first day - should be active day of the week
   const [week, setWeek] = useState(initialWeek);

   let currentScroll = 0;
   let activeElement = null;
   let activeHeight = 0;
   let nextElement = null;
   let nextElementHeight = 0;

   // const items and then itmes[index]

   useEffect(() => {
      // activeElement = document.getElementById(week[index].miliseconds);
      // activeHeight = activeElement.offsetTop + activeElement.offsetHeight;
      // nextElement = activeElement.nextSibling;
      // nextElementHeight = nextElement.offsetHeight;
   }, [])

   const handleScroll = (e) => {                
      currentScroll = e.target.scrollTop + 131;

      if (currentScroll >= activeHeight) {
         activeHeight = activeHeight + nextElementHeight;
         activeElement = activeElement.nextSibling;
         nextElement = activeElement.nextSibling;
         nextElementHeight = nextElement.offsetHeight;
         incrementIndex();
      }  
      else if (currentScroll < activeHeight.offsetTop && index.miliseconds !== initialMiliseconds) {
         decrementIndex()
      }
   }

   const incrementIndex = () => {
      if (index === 6) {
         const miliseconds = week[6].miliseconds;
         const newWeek = getWeek(miliseconds);
         setWeek(newWeek)
         setIndex(0);
      } else {
         setIndex(index + 1)
      }
   }

   const decrementIndex = () => {
      if (index === 0) {
         const miliseconds = week[6].miliseconds;
         const newWeek = getWeek(miliseconds);
         setWeek(newWeek)
      } else {
         setIndex(index - 1)
      }
   }

   const reset = () => {
      scrollToElement(initialMiliseconds, '#upcomingView')
   }

   return (
      <StyledUpcoming
         id="upcomingView"
         onScroll={handleScroll}
         className="view"
      >
         <header>
            <h1>
               {months[week[index].month - 1]} {week[index].year}
               <ChevronDown size={12} />
            </h1>
            <WeekControls
               mondayMiliseconds={week[0].miliseconds}
               sundayMilisecons={week[6].miliseconds}
               reset={reset}
               disabledPrev={initialMiliseconds >= week[0].miliseconds}
            />
            <Week
               week={week}
               activeDay={week[index].day}
               initialMiliseconds={initialMiliseconds}
            />
         </header>
      </StyledUpcoming>
   )
}

export default Upcoming
