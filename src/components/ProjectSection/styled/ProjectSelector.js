import styled from 'styled-components';

const ProjectSelector = styled.li`
   width: 248px;

   .popover {
      width: calc(100% + 39px + 12px);
      min-height: 32px;
      margin-left: -44px;
      margin-right: -12px;

      .activator {
         display: block;
         padding-left: 44px;
         padding-top: 7px;
         width: 100%;
         height: 32px;

         svg {
            position: absolute;
            top: 8px;
            left: 13px;
            color: #808080;
         } 
      }

      .menu-list {
         height: ${props => props.listHeight + 2 + 'px'};
         max-height: 258px;
         overflow-y: auto;
         overflow-x: hidden;
         position: absolute;
         bottom: 0;
         left: -1px;
         border-top: none;
         border-top-left-radius: 0;
         border-top-right-radius: 0;
         
         svg {
            margin-left: 1px;

            &.project-icon {
               margin: 4px 0 0 3px;
            }
         }
      }
   }
`;

export default ProjectSelector