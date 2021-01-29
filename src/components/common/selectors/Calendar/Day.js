import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledCalendarDay = styled.td`
   button {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      font-size: 13px;
      color: ${props => props.active? 'white' : '#202020'};
      background-color: ${props => props.active? 'red' : 'transparent'};
      padding-right: ${props => props.number > 9 ? '1px' : '0'};

      &:disabled {
         opacity: .2
      }

      &:hover {
         background-color: #eee;
         color: black;
      }
   }
`

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
            {number}
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
