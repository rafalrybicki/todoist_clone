import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { getTaskDate } from '../../../utils';
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
      z-index: 10;
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

function DatePicker({ date, setDate, dateTime, setDateTime }) {
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
            {date ? getTaskDate(date) : 'Schedule'}
         </button>
         {isOpen &&
            <div className="picker">
               <Suggestions currentDate={date} setDate={setDate} />
               <Calendar currentDate={date} setDate={setDate} />
               <TimePicker
                  date={date}
                  setDate={setDate}
                  dateTime={dateTime}
                  setDateTime={setDateTime}
               />
            </div>
         }
      </StyledDatePicker>

   )
}

DatePicker.propTypes = {
   date: PropTypes.number,
   setDate: PropTypes.func.isRequired,
   dateTime: PropTypes.number,
   setDateTime: PropTypes.func.isRequired
}

export default DatePicker
