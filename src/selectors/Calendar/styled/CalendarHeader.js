import styled from 'styled-components';

const CalendarHeader = styled.div`
   display: flex;
   align-items: center;
   height: 32px;
   padding: 0 8px 0 12px;

   .date {
      font-size: 13px;
      font-weight: bold;
      margin-right: auto;
   }

   .icon-btn {
      width: 24px;

      &:hover {
         background-color: #eee;
      }
   }
`

export default CalendarHeader
