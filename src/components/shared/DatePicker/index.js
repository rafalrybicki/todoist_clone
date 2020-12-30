import React from 'react';
import styled from 'styled-components/macro';

import { CalendarEvent } from 'react-bootstrap-icons';

import Suggestions from './Suggestions';
import Calendar from './Calendar';
import TimePicker from './TimePicker';

const StyledDatePicker = styled.div`
   width: 250px;
   > button {
      height: 28px;
      padding: 0 8px;
      border: 1px solid #ccc;
      border-radius: 3px;
      color: #555;

      svg {
         margin-right: 3px;
         margin-bottom: -1.5px;
      }
   }

   > button:hover, button:focus {
      background-color: #eee;
   }

   > div {
      position: relative;
      width: 100%;
      background-color: white;
      border-radius: 3px;
      box-shadow: 0 1px 8px 0 rgba(0,0,0,.08), 0 0 1px 0 rgba(0,0,0,.3);
      overflow: hidden;
      font-family: Arial, Helvetica, sans-serif;
   }
`

function DatePicker() {
   return (
      <StyledDatePicker>
         <button>
            <CalendarEvent /> Today
         </button>
         <div>
            <Suggestions />
            <Calendar />
            <TimePicker />
         </div>
      </StyledDatePicker>

   )
}

export default DatePicker
