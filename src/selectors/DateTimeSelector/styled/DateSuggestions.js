import styled from 'styled-components';

const DateSuggestions = styled.div`
   height: auto;
   display: flex;
   flex-direction: column;
   color: #202020;
   border-bottom: 1px solid #ddd;

   .today-icon {
      position: absolute;
      top: 9px;
      left: 12px;
   }

   .next-week-icon {
      margin-top: 1px;
      margin-left: 1px;
   }

   .this-weekend-icon {
      margin-top: -1px;
   }
`

export default DateSuggestions
