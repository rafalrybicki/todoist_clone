import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { getTaskDate } from '../../../../utils';

import { CalendarEvent } from 'react-bootstrap-icons';
import Suggestions from './Suggestions';
import Calendar from '../Calendar';
import TimeSelector from './TimeSelector';

const StyledDateTimeSelector = styled.div`
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

   > .selector {
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

function DateTimeSelector({ miliseconds, setDate, isDateTime, timeArr, addTime, removeTime }) {
   const [isOpen, setIsOpen] = useState(false);

   const toggleSelector = () => {
      setIsOpen(!isOpen)
   }

   return (
      <StyledDateTimeSelector className="miliseconds-time-selector">
         <button
            type="button"
            onClick={toggleSelector}
         >
            <CalendarEvent />
            {getTaskDate(miliseconds, isDateTime)}
         </button>
         {isOpen &&
            <div className="selector">
               <Suggestions
                  currentDate={miliseconds}
                  setDate={setDate}
               />
               <Calendar
                  currentDate={miliseconds}
                  setDate={setDate}
               />
               <TimeSelector
                  timeArr={timeArr}
                  addTime={addTime}
                  removeTime={removeTime}
               />
            </div>
         }
      </StyledDateTimeSelector>

   )
}

DateTimeSelector.propTypes = {
   miliseconds: PropTypes.number,
   setDate: PropTypes.func.isRequired,
   isDateTime: PropTypes.bool.isRequired,
   timeArr: PropTypes.array.isRequired,
   addTime: PropTypes.func.isRequired,
   removeTime: PropTypes.func.isRequired,
}

export default DateTimeSelector
