import styled from 'styled-components';

const SelectorActivator = styled.button`
   margin-right: auto;
   height: 28px;
   padding: 0 8px;
   border: 1px solid #ccc;
   border-radius: 3px;
   color: #555;

   svg {
      margin-right: 6px;

      &.calendar-icon {
         margin-bottom: -1.5px;
      }

      &.inbox-icon {
         margin-bottom: -2px;
      }
   }

   &:hover, &:focus {
      background-color: #eee;
   }
`

export default SelectorActivator