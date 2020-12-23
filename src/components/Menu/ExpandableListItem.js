import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';
import Icon from '../shared/Icon';

const StyledExpandableListItem = styled.div`
   position: relative;
   margin-left: -15px;
   padding-left: 15px;

   .project-icon {
      transform: scale(3.5);
      margin-bottom: -3px
   }

   .filter-icon {
      margin-left: 2px
   }

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

function ExpandableListItem({ text, icon }) {
   return (
      <StyledExpandableListItem>
         <Icon icon="grip" />
         <ListItem text={text} icon={icon} />
         <Icon icon="more" />
      </StyledExpandableListItem>
   )
}

export default ExpandableListItem
