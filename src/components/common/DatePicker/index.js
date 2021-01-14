import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { CalendarEvent } from 'react-bootstrap-icons';
import Suggestions from './Suggestions';
import Calendar from './Calendar';
import TimePicker from './TimePicker';

const StyledDatePicker = styled.div`
   position: relative;
   z-index: 100;

   > button {
      height: 28px;
      padding: 0 8px;
      border: 1px solid #ccc;
      border-radius: 3px;
      color: #555;

      &:hover, &:focus {
         background-color: #eee;
      }

      svg {
         margin-right: 6px;
         margin-bottom: -1.5px;
      }
   }

   .picker {
      position: absolute;
      top: 28px;
      left: 0;
      width: 250px;
      background-color: white;
      border-radius: 3px;
      box-shadow: 0 1px 8px 0 rgba(0,0,0,.08), 0 0 1px 0 rgba(0,0,0,.3);
      font-family: Arial, Helvetica, sans-serif;
   }
`

function DatePicker({ date }) {
   const [isOpen, setIsopen] = useState(false);

   const toggle = () => {
      setIsopen(!isOpen)
   }

   return (
      <StyledDatePicker className="date-picker">
         <button
            type="button"
            onClick={toggle}
         >
            <CalendarEvent />
            Schedule
         </button>
         {isOpen &&
            <div className="picker">
               <Suggestions />
               <Calendar />
               <TimePicker />
            </div>
         }
      </StyledDatePicker>

   )
}

DatePicker.propTypes = {
   date: PropTypes.string
}

export default DatePicker
