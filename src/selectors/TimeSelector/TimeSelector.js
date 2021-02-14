import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { getTimeArr } from 'utils';

import StyledTimeSelector from './styled/TimeSelector';
import CloseBtn from 'buttons/CloseBtn';
import NumberSelector from './NumberSelector';
import TimePeriodSelector from './TimePriodSelector';

function TimeSelector({ miliseconds, isDateTime, addTime, removeTime }) {
   const dateTime = isDateTime ? getTimeArr(miliseconds) : getTimeArr();
   const [hours, setHours] = useState(dateTime[0] < 10 ? '0' + dateTime[0] : dateTime[0]);
   const [minutes, setMinutes] = useState(dateTime[1] < 10 ? '0' + dateTime[1] : dateTime[1]);
   const [timePeriod, setTimePeriod] = useState(dateTime[2]);
   const [openSelector, setOpenSelector] = useState(false);

   const toggleSelector = () => {
      setOpenSelector(openSelector => !openSelector)
   }

   const saveTime = () => {
      addTime([+hours, +minutes, timePeriod])
      toggleSelector();
   }

   const getTimeBtnDescription = () => {
      return isDateTime ? `${hours}:${minutes} ${timePeriod}` : '+ Add time';
   }

   return (
      <StyledTimeSelector
         openSelector={openSelector}
         isDateTime={isDateTime}
      >
         <button
            type="button"
            className="time-btn"
            onClick={toggleSelector}
         >
            {getTimeBtnDescription()}
         </button>

         {isDateTime &&
            <CloseBtn
               size={22}
               onClick={removeTime}
            />
         }

         <div className="selectors">
            <NumberSelector
               max={12}
               value={hours}
               onChange={setHours}
            />
            <span className="separator">:</span>
            <NumberSelector
               max={59}
               value={minutes}
               onChange={setMinutes}
            />
            <TimePeriodSelector
               timePeriod={timePeriod}
               onChange={setTimePeriod}
            />
            <button
               type="button"
               className="save-btn"
               onClick={saveTime}
            >
               Save
            </button>
            <button
               type="button"
               className="cancel-btn"
               onClick={toggleSelector}
            >
               Cancel
            </button>
         </div>
      </StyledTimeSelector>
   )
}

TimeSelector.propTypes = {
   miliseconds: PropTypes.number,
   isDateTime: PropTypes.bool.isRequired,
   addTime: PropTypes.func.isRequired,
   removeTime: PropTypes.func.isRequired
}

export default TimeSelector
