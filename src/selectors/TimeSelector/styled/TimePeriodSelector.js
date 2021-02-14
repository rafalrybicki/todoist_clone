import styled from 'styled-components';

const TimePeriodSelector = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-left: 10px;

   button {
      margin: 4px;
      padding: 3px 7px;
      background-color: white;
      border-radius: 3px;
      width: 40px;
      height: 30px;
      font-weight: 500;
      background-color: #eee;

      &.active {
         background-color: red;
         color: white;

         &:hover {
            border: 1px solid black;
         }
      }

      &:hover {
         border-color: grey;
      }
   }
`

export default TimePeriodSelector