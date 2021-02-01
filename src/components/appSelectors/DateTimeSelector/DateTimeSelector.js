import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { getTimeArr, getBeginingOfTheDay, getMilisecondsFromTimeArr, getTaskDate } from '../../../utils';

import { CalendarEvent } from 'react-bootstrap-icons';
import Suggestions from './Suggestions';
import Calendar from '../Calendar/Calendar';
import TimeSelector from '../TimeSelector/TimeSelector';

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

   > .date-time-selector {
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

function DateTimeSelector({ miliseconds, setMiliseconds, isDateTime, setIsDateTime }) {
   const [openSelector, setOpenSelector] = useState(false);
   const [timeArr, setTimeArr] = useState(isDateTime ? getTimeArr(miliseconds) : []);

   const toggleSelector = () => {
      setOpenSelector(!openSelector);
   }
   
   const addTime = (timeArr) => {
      let newMiliseconds = getBeginingOfTheDay(miliseconds);  
      newMiliseconds += getMilisecondsFromTimeArr(timeArr);

      setMiliseconds(newMiliseconds);
      setTimeArr(timeArr);
      setIsDateTime(true);
   }

   const removeTime = () => {
      const newMiliseconds = getBeginingOfTheDay(miliseconds);

      setMiliseconds(newMiliseconds);
      setTimeArr([]);
      setIsDateTime(false);
   }

   const setDate = (miliseconds) => {
      if (isDateTime) {
         const newMiliseconds = getMilisecondsFromTimeArr(timeArr) + miliseconds;
         setMiliseconds(newMiliseconds);
      } else {
         setMiliseconds(miliseconds);
      }
   }

   const resetDate = () => {
      setMiliseconds(null);
      setIsDateTime(false);
      setTimeArr([]);
   }

   return (
      <StyledDateTimeSelector>
         <button
            type="button"
            onClick={toggleSelector}
         >
            <CalendarEvent />
            {getTaskDate(miliseconds, isDateTime)}
         </button>

         {openSelector &&
            <div className="date-time-selector">
               <Suggestions
                  currentDate={miliseconds}
                  setMiliseconds={setDate}
                  resetDate={resetDate}
               />
               <Calendar
                  currentDate={getBeginingOfTheDay(miliseconds)}
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
   setMiliseconds: PropTypes.func.isRequired,
   isDateTime: PropTypes.bool.isRequired,
   setIsDateTime: PropTypes.func.isRequired
}

export default DateTimeSelector
