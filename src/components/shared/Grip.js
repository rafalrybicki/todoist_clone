import React from 'react';
import styled from 'styled-components/macro';

import { GripVertical } from 'react-bootstrap-icons';

const StyledGrip = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 28px;
   width: 28px;
   cursor: move;
   position: absolute;
   color: transparent;
   border-radius: 3px;

   &:hover {
      color: #202020 !important;
      background-color: #eee;
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
