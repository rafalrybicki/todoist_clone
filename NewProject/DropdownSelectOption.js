import React from 'react';
import styled from 'styled-components/macro';
import { CircleFill } from 'react-bootstrap-icons';

const StyledDropdownSelectOption = styled.li`
   cursor: pointer;
   font-size: 13px;
   height: 29px;
   display: flex;
   align-items: center;

   &:hover {
      background-color: #f3f3f3;
   }

   .circle {
      margin: 0 10px;
   }
`

function DropdownSelectOption({ text, color, onClick}) {
   return (
      <StyledDropdownSelectOption onClick={onClick} >
         <CircleFill className="circle" color={color} size={14} />
         {text}
      </StyledDropdownSelectOption>
   )
}

export default DropdownSelectOption
