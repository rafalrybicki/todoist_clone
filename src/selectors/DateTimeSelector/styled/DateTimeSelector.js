import styled from 'styled-components';

const DateTimeSelector = styled.div`
   position: relative;

   .selector-body {
      position: absolute;
      left: 0;
      top: 28px;
      z-index: 100;
      width: 250px;
      height: max-content;
      background-color: white;
      border: 1px solid #ddd;
      border-radius: 3px;
      box-shadow: 0 1px 8px 0 rgba(0,0,0,.08), 0 0 1px 0 rgba(0,0,0,.3);
      font-family: Arial, Helvetica, sans-serif;
   }
`

export default DateTimeSelector
