import React from 'react';
import styled from 'styled-components/macro';

import { Grid3x2GapFill } from 'react-bootstrap-icons';

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

   svg {
      transform: rotate(90deg)
   }

   &:hover {
      svg {
         color: #202020;
      }
   } 
`

function Grip() {
   return (
      <StyledGrip className="grip">
         <Grid3x2GapFill size="16"/>
      </StyledGrip>
   )
}

export default Grip
