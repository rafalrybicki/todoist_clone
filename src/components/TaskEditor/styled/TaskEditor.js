import styled from 'styled-components';

const TaskEditor = styled.form`
   position: relative;
   width: 100%;

   > input {
      display: block;
      width: 100%;
      height: 81px;
      padding: 0 10px 40px;
      border: 1px solid #ddd;
      border-radius: 5px;
      outline: none;

      &:focus {
         border: 1px solid grey;
      }
   }

   section {
      position: absolute;
      top: 43px;
      width: 100%;
      display: flex;

      > * {
         margin-left: 10px;

         &.label-picker {
            margin-left: auto;
            margin-right: 0;
         }
      }
   }

   > .cancel-btn, > .submit-btn {
      margin: 10px 10px 0 0;
   }

   .section-selector ul {
      left: 50%;
      transform: translateX(-50%)
   }
`

export default TaskEditor