import styled from 'styled-components';

const TaskMenu = styled.div`
   position: absolute;
   top: 6.5px;
   right: 0;
   height: 28px;
   width: 28px;
   overflow: visible;
   background-color: white;

   > .options-btn{
      color: transparent;
   }

   > ul {
      z-index: 11;
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translateY(100%);
      width: 250px;
      font-size: 13px;
      color: #202020;
      background-color: white;
      border-radius: 3px;
      border: 1px solid #ddd;
      box-shadow: 0 1px 8px 0 rgba(0,0,0,.08);

      > li, .selector-activator {
         min-height: 32px;
         display:flex;
         align-items: center;

         > svg {
            margin: 0 14px;
            color: grey;
         }

         &.selector {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            padding-left: 10px;

            > span {
               margin-top: 5px;
               display: block;
               font-size: 12px;
               width: 100%;
            }

            .options {
               display: flex;
               padding: 5px 0;

               button {
                  margin-right: 10px;

                  &.active {
                     border: 1px solid #ddd;
                  }
               }
            }

            &:hover {
               background-color: white;
            }
         }


         &:hover {
            background-color: #f3f3f3;
         }
      }

      .section-selector ul {
         margin-right: -1px;
      }

      .date-time-selector {
         position: static;

         > div {
            margin-left: -1px;
         }
      }
   }
`;

export default TaskMenu