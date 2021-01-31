import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { getDisplayDay } from '../../../../utils';

const StyledSuggestionsItem = styled.button`
   position: relative;
   display: flex;
   align-items: center;
   height: 32px;
   border: none;
   padding: 0 10px 0 38px;
   border: none;
   flex-grow: 1;
   font-size: 13px;

   &:active, &:hover {
      background-color: #eee;
   }

   > svg {
      position: absolute;
      top: 9px;
      left: 12px;
   }

   > .day {
      margin-left: auto;
      color: #808080;
   }
`

function SuggestionsItem({ text, miliseconds, onClick, children }) {
   const day = getDisplayDay(miliseconds);

   return (
      <StyledSuggestionsItem type="button" onClick={onClick}>
         {children}
         {text}
         <span className="day">
            {miliseconds && day}
         </span>
      </StyledSuggestionsItem>
   )
}

SuggestionsItem.propTypes = {
   text: PropTypes.string.isRequired,
   miliseconds: PropTypes.number,
   onClick: PropTypes.func.isRequired,
   children: PropTypes.node.isRequired,
}

export default SuggestionsItem
