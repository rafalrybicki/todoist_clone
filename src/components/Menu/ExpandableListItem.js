import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';
import { GripVertical, ThreeDots } from 'react-bootstrap-icons';

const StyledExpandableListItem = styled.div`
   position: relative;
   margin-left: -15px;
   padding-left: 17px;

   .grip {
      position: absolute;
      top: 8px;
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
      padding-right: 6px;
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

function ExpandableListItem({ text, children }) {
   return (
      <StyledExpandableListItem>
         <GripVertical className="grip" />
         <ListItem text={text} >
            {children}
         </ListItem>
         <ThreeDots className="more" />
      </StyledExpandableListItem>
   )
}

export default ExpandableListItem
