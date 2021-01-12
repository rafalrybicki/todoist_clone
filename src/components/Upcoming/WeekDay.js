import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledWeekDay = styled.button`
   position: relative;
   font-family: Arial, Helvetica, sans-serif;
   flex-grow: 1;
   height: 48px;
   justify-content: center;
   border: none;
   border-radius: 0;
   border-bottom: 2px solid #f0f0f0;

   &.active {
     border-color: red; 

      .number {
         font-weight: 600;
         color: red;
         letter-spacing: 1px;
      }
   }

   &:hover {
      background-color: #eee;
   }

   .text {
      color: grey;
      font-size: 12px;
      display: block;
      padding-bottom: 25px;
   }

   .number {
      font-size: 16px;
      position: absolute;
      top: 20px;
      left: 50%;
      margin-left: -10px;
      width: 20px;
      height: 20px;
      letter-spacing: .5px;
   }
`

function WeekDay({text, dayNumber, miliseconds, active, onClick, disabled }) {
   return (
      <StyledWeekDay
         disabled={disabled}
         className={active && 'active'}
         onClick={onClick}
         data-value={miliseconds}
         id={'d' + miliseconds}
      >
         <span className="text">{text}</span>
         <span className="number">{dayNumber}</span>
      </StyledWeekDay>
   )
}

WeekDay.propTypes = {
   text: PropTypes.string.isRequired,
   dayNumber: PropTypes.number.isRequired,
   miliseconds: PropTypes.number.isRequired,
   active: PropTypes.bool,
   onClick: PropTypes.func.isRequired,
   disabled: PropTypes.bool.isRequired
}

export default WeekDay
