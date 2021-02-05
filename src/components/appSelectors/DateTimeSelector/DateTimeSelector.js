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
   border-radius: 3px;
   box-shadow: 0 1px 8px 0 rgba(0,0,0,.08), 0 0 1px 0 rgba(0,0,0,.3);
   font-family: Arial, Helvetica, sans-serif;
`

function DateTimeSelector({ miliseconds, setMiliseconds, isDateTime, setIsDateTime, children }) {
   const [timeArr, setTimeArr] = useState(isDateTime ? getTimeArr(miliseconds) : []);

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
      <Popover
         activator={children}
      >
         <StyledDateTimeSelector>
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
         </StyledDateTimeSelector>
      </Popover>           
   )
}

DateTimeSelector.propTypes = {
   miliseconds: PropTypes.number,
   setMiliseconds: PropTypes.func.isRequired,
   isDateTime: PropTypes.bool.isRequired,
   setIsDateTime: PropTypes.func.isRequired,
   children: PropTypes.node.isRequired
}

export default DateTimeSelector
