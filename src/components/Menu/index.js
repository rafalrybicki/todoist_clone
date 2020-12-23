import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ExpandableList from './ExpandableList';
import ExpandableListItem from './ExpandableListItem';
import ListItem from './ListItem';
import Overlay from '../shared/Overlay'

const StyledMenu = styled.div`
   padding-top: 30px;
   background-color: #FAFAFA;
   height: calc(100vh - 43px);
   width: ${props => props.isOpen ? '291px' : '0'};
   padding-top: 25px;
   font-size: 14px;
   overflow-y: auto;
   overflow-x: hidden;
   transition: 0.2s width;
   position: relative;
   z-index: 1000;

   > * {
      width: 291px;
      padding-left: 37px;
      padding-right: 10px;
   }

   .inbox {
      margin-left: -1px;
   }
`

function Menu({ isOpen, close }) {
   const [mobile, setMobile] = useState(window.innerWidth < 750);

   useEffect(() => {
      function handleResize() {
         setMobile(window.innerWidth < 750);
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   return (
      <>
         <StyledMenu isOpen={isOpen}>
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
         <Overlay show={isOpen && mobile} hide={close} />
      </>
   )
}

export default Menu
