import React from 'react';
import styled from 'styled-components';

const StyledPriorityList = styled.ul`
   position: absolute;
   bottom: 0;
   display: ${props => props.show ? 'block' : 'none'};
   transform: translateY(100%) translateX(-50%);
   margin-left: 25px;
   background-color: white;
   z-index: 100;
   width: 210px;
   border-radius: 5px;
   border: 1px solid rgba(0,0,0,.1);
   box-shadow: 0 2px 4px 0 rgba(0,0,0,.08);
   overflow: hidden;
`

function PriorityList({ show, children }) {
   return (
      <StyledPriorityList show={show}>
         {children}
      </StyledPriorityList>
   )
}

export default PriorityList
