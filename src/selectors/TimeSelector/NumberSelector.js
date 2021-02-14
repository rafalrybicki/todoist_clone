import React from 'react';
import PropTypes from 'prop-types';

import StyledNumberSelector from './styled/NumberSelector';
import { ChevronUp, ChevronDown } from 'react-bootstrap-icons';

function NumberSelector({ value, max, onChange }) {
   const increment = () => {
      const newValue = +value + 1;
      if (newValue > max) {
         onChange('00')
      } else if (newValue < 10) {
         onChange('0' + newValue)
      } else {
         onChange(newValue);
      }
   }

   const decrement = () => {
      const newValue = +value - 1;
      if (newValue < 0) {
         onChange(max)
      } else if (newValue < 10) {
         onChange('0' + newValue)
      } else {
         onChange(newValue);
      }
   }

   const handleInputChange = (e) => {
      const target = e.target.value
      if (target === '') {
         onChange('')
      } else if (+target > max) {
         onChange(max);
      } else if (+target < 0) {
         onChange('00');
      } else {
         onChange(+target);
      }
   }

   const handleInputBlur = (e) => {
      const target = e.target.value
      if (target === '') {
         onChange('00');
      } else if (+target < 10) {
         onChange(+target);
      } else {
         onChange(+target);
      }
   }

   return (
      <StyledNumberSelector>
         <button
            type="button"
            onClick={increment}
            data-value="+"
         >
            <ChevronUp />
         </button>
         <input
            type="number"
            value={value}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
         />
         <button
            type="button"
            onClick={decrement}
            data-value="-"
         >
            <ChevronDown />
         </button>
      </StyledNumberSelector>
   )
}

NumberSelector.propTypes = {
   value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
   ]).isRequired,
   max: PropTypes.number.isRequired,
   onChange: PropTypes.func.isRequired
}

export default NumberSelector
