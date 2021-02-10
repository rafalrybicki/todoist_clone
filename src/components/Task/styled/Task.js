import styled from 'styled-components';

const Task = styled.div`
   position: relative;
   width: 100%;
   min-height: 42px;
   padding-top: 20px;
   padding-left: 28px;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   cursor: pointer;
   border-bottom: 1px solid #f0f0f0;
   font-size: 14px;

   .link {
      position: absolute;
      top: 0;
      left: 28px;
      display: block;
      padding-top: 11px;
      padding-right: 30px;
      width: calc(100% - 30px);
      height: 100%;
      line-height: 1;
      color: ${props => props.isCompleted ? 'grey' : 'black'};
   }

   span.link {
      cursor: default
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

   .task-date, .project-link, .subtasks-indicator {
      margin: 14px 8px 4px 0;
      display: block;
      font-size: 12px;
      height: 16px;
      color: ${props => props.isCompleted ? 'grey' : 'navy'};

      &:hover {
         color: blue;
      }
   }

   &:hover {
      .options-btn {
         color: grey
      }
   }

   .task-date svg {
      margin-bottom: -0.9px;
   }
`;

export default Task