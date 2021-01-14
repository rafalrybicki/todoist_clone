import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledCalendarMonth = styled.table`
   width: 100%;
   position: relative;
   border-spacing: 0;
   font-size: 13px;
   padding: 0 3px 3px;

   thead::after {
      content: '';
      position: absolute;
      top: 20px;
      left: -2px;
      display: block;
      width: 250px;
      height: 1px;
      background-color: #dddddd;
   }

   tr {
      width: 100%;
      display: flex;

      th, td {
         width: calc(100% / 7);
         height: 24px;
         display: flex;
         justify-content: center;
         align-items: center;
      }

      th {
         font-weight: 400;
         font-size: 10px;
         color: #808080;
         flex-grow: 1;
      }
   }
`

function CalendarMonth({ children }) {

   return (
      <StyledCalendarMonth>
         <thead>
            <tr>
               <th>M</th>
               <th>T</th>
               <th>W</th>
               <th>T</th>
               <th>F</th>
               <th>S</th>
               <th>S</th>
            </tr>
         </thead>
         <tbody>
            {children}
         </tbody>
      </StyledCalendarMonth>
   )
}

CalendarMonth.propTypes = {
   children: PropTypes.node.isRequired
}

export default CalendarMonth
