import styled from 'styled-components';

const DateSuggestionsItem = styled.div`
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

export default DateSuggestionsItem
