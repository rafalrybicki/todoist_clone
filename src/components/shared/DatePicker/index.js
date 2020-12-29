import React from 'react';
import styled from 'styled-components/macro';

import { CalendarEvent } from 'react-bootstrap-icons';

const StyledDatePicker = styled.div`
   button {
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

   button:hover {
      background-color: #eee;
      color: blue
   }
`

function DatePicker() {
   return (
      <StyledDatePicker>
         <button>
            <CalendarEvent /> Today
         </button>
      </StyledDatePicker>

   )
}

export default DatePicker
