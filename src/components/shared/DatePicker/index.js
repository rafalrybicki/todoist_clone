import React from 'react';
import styled from 'styled-components/macro';

import { CalendarEvent } from 'react-bootstrap-icons';

import Suggestions from './Suggestions';
import DateInput from './DateInput';

const StyledDatePicker = styled.div`
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
      display: flex;
      flex-direction: column;
      width: 250px;
      background-color: white;
      border: 1px solid black;
      border-radius: 3px;
      box-shadow: 0 1px 8px 0 rgba(0,0,0,.08), 0 0 1px 0 rgba(0,0,0,.3);
      overflow: hidden;

      div {
         border-top: 1px solid #ddd;
      }

      .suggestions {
         height: 138px;
      }

      .calendar {
         height: 237px;
      }

      .actions {
         height: 41px;
      }
   }
`

function DatePicker() {
   return (
      <StyledDatePicker>
         <button>
            <CalendarEvent /> Today
         </button>
         <div>
            <DateInput />
            <Suggestions />
            <div className="calendar">
               calendar
            </div>
            <div className="actions">
               add time
            </div>
         </div>
      </StyledDatePicker>

   )
}

export default DatePicker
