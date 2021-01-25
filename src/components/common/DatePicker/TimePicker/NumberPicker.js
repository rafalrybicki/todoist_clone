import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { getHours, getMinutes } from '../../../../utils';
import { ChevronUp, ChevronDown } from 'react-bootstrap-icons';

const StyledNumberPicker = styled.div`
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


function NumberPicker({ max, val, onChange }) {

   // useEffect(() => {
   //    onChange(val)
   // }, [inputValue, onChange])

   const changeNumber = (e) => { 
      if (e.currentTarget.dataset.value === '+') {
         +val >= 9 ? onChange(+val + 1) : onChange('0' + (+val + 1));
      } else {
         +val > 10 ? onChange(+val - 1) : onChange('0' + (+val - 1));
      }
   }

   const handleInputChange = (e) => {
      const target = e.target.value

      if (target && target > max) {
         onChange(max);
         return
      } else if (target && target < 0) {
         onChange();
         return
      }

      onChange(target);
   }

   const handleInputBlur = () => {
      if (+val === 0) {
         onChange('00')
      } else if (+val < 10 && val.length === 1) {
         onChange('0' + val)
      }
   }

   return (
      <StyledNumberPicker>
         <button
            type="button"
            onClick={changeNumber}
            data-value="+"
            disabled={+val >= max}
         >
            <ChevronUp />
         </button>
         <input
            type="number"
            value={val}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
         />
         <button
            type="button"
            onClick={changeNumber}
            data-value="-"
            disabled={+val <= 0}
         >
            <ChevronDown />
         </button>
      </StyledNumberPicker>
   )
}

NumberPicker.propTypes = {
   max: PropTypes.number.isRequired,
   onChange: PropTypes.func.isRequired
}

export default NumberPicker
