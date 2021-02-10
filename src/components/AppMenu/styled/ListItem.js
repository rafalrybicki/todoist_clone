import styled from 'styled-components';

const ListItem = styled.li`
   font-size: 14px;
   position: relative;
   cursor: pointer;
   width: 244px;
   border-radius: 3px;

   .grip {
      top: -7px;
      left: -40px;
   }

   a {
      display: flex;
      align-items: center;
      border-radius: 3px;
      padding-left: 12px;
      color: #202020;
      height: 34px;
      
      &.active {
         font-weight: 700;
         background-color: white;
      }
      
      svg, div {
         margin-right: 13px;
      }

      .project-icon {
         margin: 2px 15px 0 2px;
         font-size: 12px;
      }

      .filter-icon {
         margin-top: 1px;
      }
   }

   .popover {
      position: absolute;
      top: 5px;
      right: 0;
      visibility: hidden;
      cursor: pointer;
      color: grey;

      .menu-list {
         width: 190px;
      }

      &:hover {
         color: #202020;
      }
   }

   &:hover {
      background-color: white;

      .grip {
         color: grey;
      }

      .options-btn {
         visibility: visible;
      }
   }
`

export default ListItem