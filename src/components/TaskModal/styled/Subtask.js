import styled from 'styled-components';

const Subtask = styled.div`
   position: relative;
   padding-left: 28px;
   height: 40px;

   .checkbox {
      top: 3px;
      left: 0;
   }

   .popover {
      position: absolute;
      top: 0;
      right: 0;

      .menu-list {
         width: 150px;
         border-bottom: 1px solid #f0f0f0;
      }
   }
`

export default Subtask