import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { ChevronUp, ChevronDown } from 'react-bootstrap-icons';

const StyledNumberSelector = styled.div`
   display: flex;
   flex-direction: column;

   input {
      width: 40px;
      height: 30px;
      text-align: center;
      border-radius: 3px;
      border: none;
      border: 1px solid grey;
   }

   input[type=number]::-webkit-inner-spin-button {
      -webkit-appearance: none;
   }

   button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px 0;

      &:last-of-type svg {
         margin-top: 1px;
      }
   }
`


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
