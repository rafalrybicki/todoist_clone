import React from 'react';
import PropTypes from 'prop-types';

import StyledCalendarMonth from './styled/CalendarMonth';

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
