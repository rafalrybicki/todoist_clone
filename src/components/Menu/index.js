import React from 'react';
import styled from 'styled-components';

import ExpandableList from './ExpandableList';
import ExpandableListItem from './ExpandableListItem';
import ListItem from './ListItem'

const StyledMenu = styled.div`
   padding-top: 30px;
   background-color: #FAFAFA;
   height: calc(100vh - 43px);
   width: 291px;
   padding: 30px 10px 0 ;
   font-size: 14px;

   ul {
      width: 100%;
      padding-left: 28px;
   }

   .inbox {
      margin-left: -1px;
   }
`

function Menu() {
   return (
      <StyledMenu>
         <ul>
            <ListItem text="Inbox 6" icon="inbox" />
            <ListItem text="Today 2" icon="today" />
            <ListItem text="Upcoming" icon="upcoming" />
         </ul>
         
         <ExpandableList text="Projects">
            <ExpandableListItem text="project" icon="project" />
            <ExpandableListItem text="project 2" icon="project" />
            <ExpandableListItem text="project 3" icon="project" />
         </ExpandableList>

         <ExpandableList text="Filters">
            <ExpandableListItem text="filter" icon="filter" />
            <ExpandableListItem text="filter 2" icon="filter" />
            <ExpandableListItem text="filter 3" icon="filter" />
         </ExpandableList>
      </StyledMenu>
   )
}

export default Menu
