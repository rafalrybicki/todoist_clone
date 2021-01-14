import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledTimePeriodpicker = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-left: 10px;

   button {
      margin: 4px;
      padding: 3px 7px;
      background-color: white;
      border-radius: 3px;
      width: 40px;
      height: 30px;
      font-weight: 500;
      background-color: #eee;

      &.active {
         background-color: red;
         color: white;

         &:hover {
            border: 1px solid black;
         }
      }

      &:hover {
         border-color: grey;
      }
   }
`

function TimePeriodPicker({ timePeriod, onChange }) {
   return (
      <StyledTimePeriodpicker>
         <button
            className={timePeriod === 'AM' ? "active" : ""}
            onClick={() => onChange('AM')}
         >
            AM
         </button>
         
         <button
            className={timePeriod === 'PM' ? "active" : ""}
            onClick={() => onChange('PM')}
         >
            PM
         </button>
      </StyledTimePeriodpicker>
   )
}

TimePeriodPicker.propTypes = {
   timePeriod: PropTypes.oneOf(['AM', 'PM']),
   onChange: PropTypes.func.isRequired
}

export default TimePeriodPicker
