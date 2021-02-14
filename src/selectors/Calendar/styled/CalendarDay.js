import styled from 'styled-components';

const CalendarDay = styled.td`
   button {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      font-size: 13px;
      color: ${props => props.active? 'white' : '#202020'};
      background-color: ${props => props.active? 'red' : 'transparent'};
      display: flex;
      justify-content: center;
      align-items: center;

      span {
         line-height: 1;
         margin-top: -1px;
      }

      &:disabled {
         opacity: .2
      }

      &:hover {
         background-color: #eee;
         color: black;
      }
   }
`

export default CalendarDay
