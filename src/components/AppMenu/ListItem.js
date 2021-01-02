import React from 'react';
import styled from 'styled-components/macro';

const StyledListItem = styled.li`
   padding-left: 11px;
   display: flex;
   height: 34px;
   align-items: center;
   font-size: 14px;
   position: relative;
   cursor: pointer;
   border-radius: 3px;

   &.active {
      background-color: white;
      font-weight: 700
   }

   .link {
      flex-grow: 1;
      padding-left: 15px
   }
`

function ListItem({ text, children }) {
   return (
      <StyledListItem>
         {children}
         <span className="link">{text}</span>
      </StyledListItem>
   )
}

export default ListItem
