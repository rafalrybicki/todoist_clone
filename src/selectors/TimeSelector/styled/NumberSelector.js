import styled from 'styled-components';

const NumberSelector = styled.div`
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

export default NumberSelector