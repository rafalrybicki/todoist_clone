import React from 'react';
import styled from 'styled-components/macro';

import IconBtn from '../components/shared/IconBtn';
import { ArrowDownUp } from 'react-bootstrap-icons';
import Task from '../components/Task';
import { getDisplayDate } from '../helpers';

const StyledToday = styled.div`
   position: relative;

   h1 {
      display: flex;
      align-items: center;
   }

   .date {
      margin-left: 8px;
      padding-top: 3px;
      font-size: 11px;
      font-weight: 400;
      color: grey;
   }
`

function Today() {
   const date = getDisplayDate();
   
   return (
      <StyledToday>
         <header>
            <h1>Today
               <span className="date">{date}</span>
            </h1>
            <IconBtn tooltip="Sort" tooltipWidth="36px">
               <ArrowDownUp size="16"/>
            </IconBtn>
         </header>
         
         <h2>Overude</h2>
         <Task priority="1" />
         <Task priority="2" />
         <Task priority="3" />
         <Task priority="4" />
      </StyledToday>
   )
}

export default Today
