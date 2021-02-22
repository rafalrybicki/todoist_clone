import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { getTimeArr, getBeginingOfTheDay, getMilisecondsFromTimeArr } from 'utils';
import useOutsideClick from 'hooks/useOutsideClick';

import StyledDateTimeSelector from './styled/DateTimeSelector';
import DateSuggestions from './DateSuggestions';
import Calendar from '../Calendar/Calendar';
import TimeSelector from '../TimeSelector/TimeSelector';


function DateTimeSelector({ miliseconds, isDateTime, onChange, children }) {
   const [timeArr, setTimeArr] = useState(isDateTime ? getTimeArr(miliseconds) : []);
   const [openSelector, setOpenSelector] = useState(false);

   const dateTimeSelectorRef = useRef(null);

   const toggleSelector = () => {
      setOpenSelector(openSelector => !openSelector);
   }

   useOutsideClick(openSelector, dateTimeSelectorRef, toggleSelector);

   const addTime = (timeArr) => {
      let newMiliseconds = getBeginingOfTheDay(miliseconds);  
      newMiliseconds += getMilisecondsFromTimeArr(timeArr);

      onChange(newMiliseconds, true)
      setTimeArr(timeArr);
   }

   const removeTime = () => {
      const newMiliseconds = getBeginingOfTheDay(miliseconds);

      onChange(newMiliseconds, false)
      setTimeArr([]);
   }

   const setMiliseconds = (miliseconds) => {
      if (isDateTime) {
         const newMiliseconds = getMilisecondsFromTimeArr(timeArr) + miliseconds;
         onChange(newMiliseconds, true);
      } else {
         onChange(miliseconds, false);
      }
   }

   const resetDate = () => {
      onChange(null, false);
      setTimeArr([]);
   }

   return (
      <StyledDateTimeSelector
         ref={dateTimeSelectorRef}
         className="date-time-selector"
      >
         <div
            onClick={toggleSelector}
            className="selector-activator"
         >
            {children}
         </div>

         {openSelector &&
            <div 
               className="selector-body"
            >
               <DateSuggestions
                  currentDate={miliseconds}
                  setMiliseconds={setMiliseconds}
                  resetDate={resetDate}
                  closeSelector={toggleSelector}
               />
               <Calendar
                  currentDate={getBeginingOfTheDay(miliseconds)}
                  setDate={setMiliseconds}
               />
               <TimeSelector
                  miliseconds={miliseconds}
                  isDateTime={isDateTime}
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
   isDateTime: PropTypes.bool.isRequired,
   onChange: PropTypes.func.isRequired,
   children: PropTypes.node.isRequired
}

export default DateTimeSelector
