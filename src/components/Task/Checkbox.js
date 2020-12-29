import React from 'react';
import styled from 'styled-components/macro';

const StyledCheckbox = styled.span`
   position: absolute;
   top: 8px;
   left: 0px;
   display: block;
   border-radius: 50%;
   border-width: ${props => props.color === 'grey' ? '1px' : '2px'};
   border-style: solid;
   border-color: ${props => props.color};
   background-color: ${props => props.color === 'grey' ? 'white' : 'rgba(209,69,59,.1)'};
   height: 18px;
   width: 18px;
   margin-right: 7px;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 10px;
   color: transparent;
   transition: all .2s;

   &:hover {
      background-color: rgba(209,69,59,.2);
      color: grey;
   }
`

function Checkbox({ priority }) {
   const colors = {
      1: 'rgb(209, 69, 59)',
      2: 'rgb(235, 137, 9)',
      3: 'rgb(36, 111, 224)',
      4: 'grey',
   }
   
   return (
      <StyledCheckbox color={colors[priority]} className="checkbox">
         &#10004;
      </StyledCheckbox>
   )
}

export default Checkbox
