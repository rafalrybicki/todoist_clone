import React from 'react';
import styled from 'styled-components/macro';

import { ChevronDown } from 'react-bootstrap-icons';
import WeekControls from './WeekControls';
import Week from './Week';
import Day from './Day';

const StyledUpcoming = styled.div`
   position: relative;

   header {
      position: sticky;
      top: 0;
      padding: 36px 55px;
      margin-left: -55px;
      margin-right: -55px;
      background-color: white;
      z-index: 1000
   }

   h1 {
      cursor: pointer;
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
