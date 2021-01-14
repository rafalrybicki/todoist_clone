import React from 'react';
import styled from 'styled-components/macro';

const StyledSuggestionsItem = styled.button`
   position: relative;
   display: flex;
   align-items: center;
   border: none;
   padding: 0 10px 0 38px;
   border: none;
   flex-grow: 1;
   font-size: 13px;

   &:active, &:hover {
      background-color: #eee;
   }

   svg {
      position: absolute;
      top: 9px;
      left: 12px;
      margin-right: 12px;
   }

   .day {
      margin-left: auto;
      color: #808080;
   }
`

function SuggestionsItem({ text, children }) {
   return (
      <StyledSuggestionsItem>
         {children}
         {text}
         <span className="day">Mon</span>
      </StyledSuggestionsItem>
   )
}

export default SuggestionsItem
