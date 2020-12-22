import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';

function ExpandableListItem({ text, children }) {
   return (
      <StyledExpandableListItem>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="grip" viewBox="0 0 16 16">
            <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
         </svg>
         <ListItem text={text}>
            {children}
         </ListItem>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="more" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
         </svg>
      </StyledExpandableListItem>
   )
}

const StyledExpandableListItem = styled.div`
   position: relative;
   margin-left: -15px;
   padding-left: 15px;

   .dot-icon {
      display: block;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background-color: black;
      margin: 3px 2px 0 4px
   }

   .filter-icon {
      margin-left: 2px
   }

   .grip {
      position: absolute;
      top: 9px;
      left: 0;
      cursor: move;
      width: 20px
   }

   .more {
      position: absolute;
      top: 10px;
      right: 0;
      cursor: pointer;
      width: 25px;
      padding-right: 5px
   }

   .grip, .more {
      visibility: hidden;
      color: #999;
      height: 20px;
   }

   &:hover {
      .grip, .more {
         visibility: visible;
      }
   }

   .grip:hover, .more:hover {
      color: black;
   }
`

export default ExpandableListItem
