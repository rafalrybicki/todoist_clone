import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

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
function getHours() {
   let hours = new Date().getHours();
   
   if (hours > 12) {
      hours = hours - 12
   } 

   return hours < 10 ? '0' + hours : hours;
}

function getMinutes() {
   const minutes = new Date().getMinutes();

   return minutes < 10 ? '0' + minutes : minutes;
}

function NumberPicker({ initialValue, max, onChange }) {
   const [inputValue, setInputValue] = useState(max === 12 ? getHours() : getMinutes());

   useEffect(() => {
      onChange(inputValue)
   }, [inputValue, onChange])

   const changeNumber = (e) => { 
      if (e.currentTarget.dataset.value === '+') {
         +inputValue >= 9 ? setInputValue(+inputValue + 1) : setInputValue('0' + (+inputValue + 1));
      } else {
         +inputValue > 10 ? setInputValue(+inputValue - 1) : setInputValue('0' + (+inputValue - 1));
      }
   }

   const handleInputChange = (e) => {
      const target = e.target.value

      if (target && target > max) {
         setInputValue(max);
         return
      } else if (target && target < 0) {
         setInputValue();
         return
      }

      setInputValue(target);
   }

   const handleInputBlur = () => {
      if (+inputValue === 0) {
         setInputValue('00')
      } else if (+inputValue < 10 && inputValue.length === 1) {
         setInputValue('0' + inputValue)
      }
   }

   return (
      <StyledNumberPicker>
         <button
            onClick={changeNumber}
            data-value="+"
            disabled={+inputValue >= max}
         >
            <ChevronUp />
         </button>
         <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
         />
         <button
            onClick={changeNumber}
            data-value="-"
            disabled={+inputValue <= 0}
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
