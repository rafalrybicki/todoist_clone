import React from 'react';
import styled from 'styled-components';

const StyledDropdownSelectList = styled.ul`
   position: absolute;
   top: 55px;
   height: 300px;
   width: 100%; 
   overflow-y: auto;
   overflow-x: hidden;
   border: 1px solid rgba(0,0,0,.1);
   border-radius: 3px;
   background-color: white;
`

function DropdownSelectList({ children }) {
   return (
      <StyledDropdownSelectList>
         {children}
      </StyledDropdownSelectList>
   )
}

export default DropdownSelectList
