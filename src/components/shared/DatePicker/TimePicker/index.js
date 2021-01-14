import React, { useState } from 'react';
import styled from 'styled-components/macro';
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

function TimePicker() {
   const [showPicker, togglePicker] = useState(false);
   const [timePeriod, setTimePeriod] = useState(new Date().getHours() > 12 ? 'PM' : 'AM');
   const [hours, setHours] = useState(null);
   const [minutes, setMinutes] = useState(null);

   return (
      <StyledTimePicker showPicker={showPicker}>
         <button
            className="addtime-btn"
            onClick={() => togglePicker(true)}
         >
            + Add time
         </button>
         <div className="pickers">
            <NumberPicker
               max={12}
               onChange={setHours}
            />
            <span className="separator">:</span>
            <NumberPicker
               max={59}
               onChange={setMinutes}
            />
            <TimePeriodPicker
               timePeriod={timePeriod}
               onChange={setTimePeriod}
            />
            <button className="save-btn">Save</button>
         </div>
         {showPicker &&
            <button
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
