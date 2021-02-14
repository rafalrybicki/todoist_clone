import React from 'react';
import PropTypes from 'prop-types';

import StyledCalendarDay from './styled/CalendarDay';

function CalendarDay({ number, active, onClick, disabled }) {
   return (
      <StyledCalendarDay
         active={active}
         number={number}
      >
         <button 
            type="button"
            onClick={onClick}
            disabled={disabled}
         >
            <span>
               {number}
            </span>
         </button>
      </StyledCalendarDay>
   )
}

CalendarDay.propTypes = {
   number: PropTypes.number.isRequired,
   active: PropTypes.bool.isRequired,
   onClick: PropTypes.func.isRequired,
   disabled: PropTypes.bool.isRequired
}

export default CalendarDay
