import styled from 'styled-components';

const Task = styled.div`
   position: relative;
   width: 100%;
   min-height: 42px;
   padding-top: 20px;
   padding-left: 25px;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   cursor: pointer;
   border-bottom: 1px solid #f0f0f0;
   font-size: 14px;

   .link {
      position: absolute;
      top: 0;
      left: 25px;
      display: block;
      padding-top: 8px;
      padding-right: 30px;
      width: calc(100% - 30px);
      height: 100%
   }

   .grip {
      top: 4px;
      left: -32px;
   }

   &:hover {
      .grip svg,.actions svg {
         color: grey;
      }
   }

   .checkbox {
      top: 9px;
      left: 0;
   }

   .task-date, .project-link {
      margin: 14px 8px 4px 0;
   }

   &:hover {
      .options-btn {
         color: grey
      }
   }
`;

export default Task