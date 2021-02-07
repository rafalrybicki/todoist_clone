import styled from 'styled-components';

const ToggleSwitch = styled.div`
   position: relative;
   display: flex;
   flex-direction: row-reverse;
   justify-content: flex-end;
   cursor: pointer;
   width: 160px;
   margin-bottom: 17px;

   label {
      font-weight: 400 !important;
   }

   input {
      cursor: pointer;
      width: 40px;
      height: 18px;
      display: block;
      margin-right: 10px;
      border-radius: 10px;
      outline: none;
      background-color: ${props => props.checked ? 'red' : '#aaaaaa'};
      -moz-appearance: none;
      -webkit-appearance: none;
      -o-appearance: none; 
   }

   .switch {
      position: absolute;
      top: 3px;
      left: 4px;
      display: block;
      border-radius: 50%;
      margin-left: ${props => props.checked ? '21px' : '0'};
      height: 12px;
      width: 12px;
      z-index: 100;
      background-color: white;
      transition: margin .2s;
   }
`

export default ToggleSwitch
