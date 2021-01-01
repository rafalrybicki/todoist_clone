import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledWeekDay = styled.button`
   flex-grow: 1;
   border: none;
   border-radius: 0;
   border-bottom: 2px solid #f0f0f0;

   &.active {
     border-color: red; 

      .text, .number {
         font-weight: bold;
         color: red;
      }
   }

   &:hover {
      background-color: #eee;
   }

   .text {
      color: grey;
      font-size: 12px;
      display: block;
      padding-bottom: 2px;
   }

   .number {
      font-size: 16px;
   }
`

function WeekDay({ text, number, active, disabled}) {
   return (
      <StyledWeekDay disabled={disabled} className={active && 'active'}>
         <span className="text">{text}</span>
         <span className="number">{number}</span>
      </StyledWeekDay>
   )
}

WeekDay.propTypes = {
   text: PropTypes.string.isRequired,
   number: PropTypes.number.isRequired,
   active: PropTypes.bool,
   disabled: PropTypes.bool
}

export default WeekDay
