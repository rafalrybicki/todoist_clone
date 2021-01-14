import React from 'react';
import { X } from 'react-bootstrap-icons';
import styled from 'styled-components/macro';

const StyledDateInput = styled.label`
   position: relative;
   input {
      height: 42px;
      padding: 8px 36px 8px 12px;
      border: none;
      width: 100%
   }

   input:focus, input:hover  {
      background-color: #eee;
   }


   .close {
      position: absolute;
      display: flex;
      padding: 5px;
      top: 6px;
      right: 7px;
   }
`

function DateInput() {
   return (
      <StyledDateInput for="date">
         <input 
            id="date"
            name="date"
            type="text"
            placeholder="Type a due date"
         />
         <button className="close">
            <X size={20} />
         </button>
      </StyledDateInput>
   )
}

export default DateInput
