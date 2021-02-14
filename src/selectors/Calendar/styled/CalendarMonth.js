import styled from 'styled-components';

const CalendarMonth = styled.table`
   width: 100%;
   position: relative;
   border-spacing: 0;
   font-size: 13px;
   padding: 0 3px 6px;

   thead::after {
      content: '';
      position: absolute;
      top: 20px;
      left: -2px;
      display: block;
      width: 250px;
      height: 1px;
      background-color: #dddddd;
   }

   tr {
      width: 100%;
      display: flex;

      th, td {
         width: calc(100% / 7);
         height: 24px;
         display: flex;
         justify-content: center;
         align-items: center;
      }

      th {
         font-weight: 400;
         font-size: 10px;
         color: #808080;
         flex-grow: 1;
      }
   }
`

export default CalendarMonth
