import styled from 'styled-components';

const ProjectSection = styled.section`
   position: relative;
   width: 100%;
   padding-bottom: 20px;

   header {
      display: flex;
      border-bottom: 1px solid #f0f0f0;

      .grip {
         top: -4px;
         left: -60px;

         &:hover {
            background-color: #eee;
         }
      }
      
      .chevron {
         position: absolute;
         top: -4px;
         left: -32px;

         svg {
            color: grey;
         }

         &:hover {
            svg {
               color: #202020
            }
         }
      }

      h2{
         font-size: 14px;
         margin: 0 5px 5px 0;
         flex-grow: 1;
      }

      &:hover {
         .grip {
            color: grey;
         }
      }
   }

   .section-menu {
      z-index: 10;
      position: relative;
      height: 28px;
      width: 28px;
      overflow: visible;

      > button {
         position: relative;
      }

      > ul {
         z-index: 100;
         position: absolute;
         bottom: 0;
         right: 0;
         transform: translateY(100%);
      }

   }
`;

export default ProjectSection