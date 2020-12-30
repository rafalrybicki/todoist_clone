import React from 'react';
import styled from 'styled-components/macro';

const StyledTimePicker = styled.button`
   height: 30px;
   margin: 7px 0 7px 8px;
   color: red;
   font-weight: bold;
   padding: 5px;
`

function TimePicker() {
   return (
      <StyledTimePicker>
         + Add time
      </StyledTimePicker>
   )
}

export default TimePicker
