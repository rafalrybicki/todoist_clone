import React from 'react';
import styled from 'styled-components/macro';

import { GripVertical } from 'react-bootstrap-icons';

const StyledGrip = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 28px;
   width: 35px;
   padding-left: 7px;
   cursor: move;
   position: absolute;
   color: transparent;
   border-radius: 3px;

   &:hover {
      svg {
         color: #202020 !important;
      }
   } 
`

function Grip() {
   return (
      <StyledGrip className="grip">
         <GripVertical size="20"/>
      </StyledGrip>
   )
}

export default Grip
