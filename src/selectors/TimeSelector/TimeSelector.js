import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { getTimeArr } from 'utils';

import CloseBtn from 'buttons/CloseBtn';
import NumberSelector from './NumberSelector';
import TimePeriodSelector from './TimePriodSelector';

const StyledTimeSelector = styled.div`
   position: relative;
   height: 41px;
   font-weight: bold;
   padding: 0 8px 0 5px;
   display: flex;
   align-items: center;
   justify-content: center;

   .time-btn{
      font-weight: 13px;
      height: 26px;
      padding: 4px;
      color: red;
      font-weight: 600;
      border: ${props => props.isDateTime ? '1px solid #ddd' : '1px solid transparent'};
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
   }

   .close-btn {
      padding-top: 2px;
      border: 1px solid #ddd;
      border-left: none;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
   }

   .selectors {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 20px 0 41px;
      background-color: white;
      display: flex;
      justify-content: center;
      width: 100%;
      z-index: ${props => props.openSelector ? '1' : '-1'};
      opacity: ${props => props.openSelector ? '1' : '0'};
      transition: opacity .1s;

      .separator {
         display: flex;
         align-items: center;
         margin: 0 12px;
      }

      .save-btn, .cancel-btn  {
         position: absolute;
         bottom: 0;
         height: 41px;
         padding: 0 10px;
      }

      .save-btn {
         left: 35px;
         background-color: white;
         color: red;
         font-weight: bold;
      }

      .cancel-btn {
         right: 35px;
      }
   }
`

function TimeSelector({ timeArr, addTime, removeTime }) {
   const dateTime = timeArr && timeArr.length > 0 ? timeArr : getTimeArr();
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
      return timeArr && timeArr.length > 0  ? `${hours}:${minutes} ${timePeriod}` : '+ Add time';
   }

   return (
      <StyledTimeSelector
         openSelector={openSelector}
         isDateTime={timeArr && timeArr.length > 0 }
      >
         <button
            type="button"
            className="time-btn"
            onClick={toggleSelector}
         >
            {getTimeBtnDescription()}
         </button>

         {timeArr && timeArr.length > 0 &&
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
   timeArr: PropTypes.array,
   addTime: PropTypes.func.isRequired,
   removeTime: PropTypes.func.isRequired
}

export default TimeSelector
