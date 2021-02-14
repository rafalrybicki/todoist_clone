import React from 'react';
import PropTypes from 'prop-types';

import { getDisplayDay } from 'utils';

import StyledDateSuggestionsItem from './styled/DateSuggestionsItem';

function SuggestionsItem({ text, miliseconds, onClick, children }) {
   const day = getDisplayDay(miliseconds);

   return (
      <StyledDateSuggestionsItem
         type="button"
         onClick={onClick}
      >
         {children}
         {text}
         {miliseconds &&
            <span className="day">
               {day}
            </span>
         }
      </StyledDateSuggestionsItem>
   )
}

SuggestionsItem.propTypes = {
   text: PropTypes.string.isRequired,
   miliseconds: PropTypes.number,
   onClick: PropTypes.func,
   children: PropTypes.node.isRequired,
}

export default SuggestionsItem
