import React from 'react';
import styled from 'styled-components/macro';

import Suggestions from './Suggestions';
import Calendar from './Calendar';
import TimePicker from './TimePicker';

const StyledDatePicker = styled.div`
   position: relative;
   width: 250px;
   left: 0;
   background-color: white;
   border-radius: 3px;
   box-shadow: 0 1px 8px 0 rgba(0,0,0,.08), 0 0 1px 0 rgba(0,0,0,.3);
   overflow: hidden;
   font-family: Arial, Helvetica, sans-serif;
`

function DatePicker() {
   return (
      <StyledDatePicker className="date-picker">
         <Suggestions />
         <Calendar />
         <TimePicker />
      </StyledDatePicker>

   )
}

export default DatePicker
