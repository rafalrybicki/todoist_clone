import styled from 'styled-components';

const TaskModal = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   z-index: 101;
   background-color: white;
   width: 100%;
   max-width: 650px;
   height: 100%;
   max-height: 960px;
   padding: 25px 24px 20px;

   .project-link {
      font-size: 13px;
      margin-right: 13px;

      svg {
         margin: 0 14px 0 4px;

         &.inbox-icon {
            margin: 0 12px -1px 2.5px;
            font-size: 14px;
         }
      }
   }

   .task {
      margin-top: 10px;
      border: none;

      .options-btn {
         color: grey;
         padding-right: 1px;
      }
   }

   .editor {
      margin-top: 15px;
   }

   .close-btn {
      position: absolute;
      top: 25px;
      right: 26px;
   }

   .new-subtask {
      margin-top: 15px;
   }

   @media (min-width: 650px) {
      height: calc(100vh - 40px);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;
   }
`

export default TaskModal