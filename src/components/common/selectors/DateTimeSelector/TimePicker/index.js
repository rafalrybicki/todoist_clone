import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { getHours, getMinutes } from '../../../../../utils';

import NumberPicker from './NumberPicker';
import TimePeriodPicker from './TimePeriodPicker';

const StyledTimePicker = styled.div`
   position: relative;
   height: 41px;
   font-weight: bold;
   padding: 0 8px 0 5px;
   display: flex;
   justify-content: space-between;

   > button {
      height: 100%;
      padding: 5px;

      &.addtime-btn{
         display: ${props => props.showPicker ? 'none' : 'block'};
         color: red;
         font-weight: bold;
      }

      &.cancel-btn {
         margin-left: auto;
      }
   }

   .pickers {
      position: absolute;
      top: -1px;
      left: 0;
      transform: translateY(-100%);
      padding: 10px 0 5px;
      background-color: white;
      display: flex;
      justify-content: center;
      width: 100%;
      z-index: ${props => props.showPicker ? '1' : '-1'};
      opacity: ${props => props.showPicker ? '1' : '0'};
      transition: all .2s;

      .separator {
         display: flex;
         align-items: center;
         margin: 0 12px;
      }

      .save-btn {
         position: absolute;
         bottom: -42px;
         left: 12px;
         display: ${props => props.showPicker ? 'block' : 'none'};
         height: 41px;
         padding: 0 10px;
         background-color: white;
         color: red;
         font-weight: bold;
      }
   }
`


// function getTimeArr(miliseconds) {
//    const date = miliseconds ? Date.parse(miliseconds) : new Date();
//    let hours = date.getHours();
//    const minutes = date.getMinutes();
//    const timePeriod = hours > 12 ? 'PM' : 'AM';

//    if (hours > 12) {
//       hours -= 12;
//    }

//    return [hours, minutes, timePeriod]
// }

function TimePicker({ date, setDate, dateTime, setDateTime }) {
   const [showPicker, togglePicker] = useState(false);
   const [hours, setHours] = useState(date ? date[0] : getHours());
   const [minutes, setMinutes] = useState(date ? date[1] : getMinutes());
   const [timePeriod, setTimePeriod] = useState((date && date > 12) || (new Date().getHours() > 12) ? 'PM' : 'AM');

   console.log(hours, minutes, timePeriod)

   return (
      <StyledTimePicker showPicker={showPicker}>
         <button
            type="button"
            className="addtime-btn"
            onClick={() => togglePicker(true)}
         >
            + Add time
         </button>
         <div className="pickers">
            <NumberPicker
               max={12}
               val={hours}
               onChange={setHours}
            />
            <span className="separator">:</span>
            <NumberPicker
               max={59}
               val={minutes}
               onChange={setMinutes}
            />
            <TimePeriodPicker
               timePeriod={timePeriod}
               onChange={setTimePeriod}
            />
            <button
               type="button"
               className="save-btn"
            >Save</button>
         </div>
         {showPicker &&
            <button
               type="button"
               className="cancel-btn"
               onClick={() => togglePicker(false)}
            >
               Cancel
            </button>
         }
      </StyledTimePicker>
   )
}

export default TimePicker
