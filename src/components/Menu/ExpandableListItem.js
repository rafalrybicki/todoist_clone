import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';
import { ThreeDots } from 'react-bootstrap-icons';
import Grip from '../shared/Grip';

const StyledExpandableListItem = styled.div`
   position: relative;
   margin-left: -15px;
   padding-left: 17px;

   .grip {
      top: 4px;
      left: -2px;
      background-color: transparent;
   }

   .more {
      position: absolute;
      top: 10px;
      right: 0;
      cursor: pointer;
      width: 25px;
      padding-right: 6px;
   }

   .more {
      visibility: hidden;
      color: #999;
      height: 20px;
   }

   &:hover {
      .more {
         visibility: visible;
      }
      .grip {
         color: #999
      }
   }

   .grip:hover, .more:hover {
      color: black;
   }
`

function ExpandableListItem({ text, children }) {
   return (
      <StyledExpandableListItem>
         <Grip />
         <ListItem text={text} >
            {children}
         </ListItem>
         <ThreeDots className="more" />
      </StyledExpandableListItem>
   )
}

export default ExpandableListItem
