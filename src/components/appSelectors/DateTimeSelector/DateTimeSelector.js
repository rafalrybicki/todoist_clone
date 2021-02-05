import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { getTimeArr, getBeginingOfTheDay, getMilisecondsFromTimeArr } from 'utils';

import Suggestions from './Suggestions';
import Calendar from '../Calendar/Calendar';
import TimeSelector from '../TimeSelector/TimeSelector';
import Popover from 'components/Popover';

const StyledDateTimeSelector = styled.div`
   z-index: 100;
   top: 28px;
   left: 0;
   width: 250px;
   height: max-content;
   background-color: white;
   border: 1px solid #ddd;
   border-radius: 3px;
   box-shadow: 0 1px 8px 0 rgba(0,0,0,.08), 0 0 1px 0 rgba(0,0,0,.3);
   font-family: Arial, Helvetica, sans-serif;
`

function DateTimeSelector({ miliseconds, isDateTime, onChange, children }) {
   const [timeArr, setTimeArr] = useState(isDateTime ? getTimeArr(miliseconds) : []);

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
      <Popover
         activator={children}
         className="date-time-selector"
      >
         <StyledDateTimeSelector>
            <Suggestions
               currentDate={miliseconds}
               setMiliseconds={setMiliseconds}
               resetDate={resetDate}
            />
            <Calendar
               currentDate={getBeginingOfTheDay(miliseconds)}
               setDate={setMiliseconds}
            />
            <TimeSelector
               timeArr={timeArr}
               addTime={addTime}
               removeTime={removeTime}
            />
         </StyledDateTimeSelector>
      </Popover>           
   )
}

DateTimeSelector.propTypes = {
   miliseconds: PropTypes.number,
   isDateTime: PropTypes.bool.isRequired,
   onChange: PropTypes.func.isRequired,
   children: PropTypes.node.isRequired
}

export default DateTimeSelector
