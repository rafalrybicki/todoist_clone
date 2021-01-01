import React from 'react';
import styled from 'styled-components/macro';

import IconBtn from '../shared/IconBtn';
import { ArrowDownUp } from 'react-bootstrap-icons';
import Task from '../Task';

const StyledToday = styled.div`
   position: relative;

   .date {
      margin-left: 8px;
      font-size: 11px;
      font-weight: 400;
      color: grey;
   }

   .sort-btn {
      position: absolute;
      top: 0;
      right: 0;
   }
`

function Today() {
   const date = new Date().toGMTString().replace(',', '').split(' ');

   return (
      <StyledToday>
         <h1>Today
            <span className="date">{date[0]} {+date[1]} {date[2]}</span>
         </h1>

         <IconBtn tooltip="Sort" tooltipWidth="36px" cssClass="sort-btn">
            <ArrowDownUp size="16"/>
         </IconBtn>
         
         <h2>Overude</h2>
         <Task priority="1" />
         <Task priority="2" />
         <Task priority="3" />
         <Task priority="4" />
      </StyledToday>
   )
}

export default Today
