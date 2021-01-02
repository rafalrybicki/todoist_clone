import React from 'react';
import styled from 'styled-components/macro';

import { ChevronDown } from 'react-bootstrap-icons';
import WeekControls from '../components/Upcoming/WeekControls';
import Week from '../components/Upcoming/Week';
import Day from '../components/Upcoming/Day';

const StyledUpcoming = styled.div`
   position: relative;

   header {
      display: block;

      h1 {
         display: inline;
      }
   }

   h1 svg {
      color: grey;
      margin-left: 5px;
      margin-bottom: 1px;
   }
`

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function Upcoming() {
   const date = new Date();
   const year = date.getFullYear();
   const month = date.getMonth();

   return (
      <StyledUpcoming>
         <header>
            <h1>
               {months[month]} {year}
               <ChevronDown size={12} />
            </h1>
            <WeekControls />
            <Week />
         </header>
         <Day date="1-1-2021" />
         <Day date="1-2-2021" />
         <Day date="1-3-2021" />
         <Day date="1-4-2021" />
         <Day date="1-5-2021" />
         <Day date="1-6-2021" />
         <Day date="1-7-2021" />
      </StyledUpcoming>
   )
}

export default Upcoming
