import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import ExpandableList from './ExpandableList';
import ExpandableListItem from './ExpandableListItem';
import ListItem from './ListItem';
import NewItemBtn from '../shared/NewItemBtn';
import Overlay from '../shared/Overlay'

import { InboxFill, Calendar, Calendar3, CircleFill, DropletFill } from 'react-bootstrap-icons';

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
   
   .circle {
      margin-top: 2px
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
               <ListItem text="Inbox 6">
                  <InboxFill color="#246fe0" size={18} className="inbox"/>
               </ListItem>
               <ListItem text="Today 2">
                  <Calendar color="#058527" size={16} />
               </ListItem>
               <ListItem text="Upcoming">
                  <Calendar3 color="#692fc2" size={16} />
               </ListItem>
            </ul>
            
            <ExpandableList text="Projects">
               <ExpandableListItem text="project">
                  <CircleFill size={12} className="circle" />
               </ExpandableListItem>
               <ExpandableListItem text="sdfsdfsdf 2">
                  <CircleFill size={12} className="circle" />
               </ExpandableListItem>
               <ExpandableListItem text="project 3">
                  <CircleFill size={12} className="circle" />
               </ExpandableListItem>
               <NewItemBtn text="Add project" width="110px" />
            </ExpandableList>

            <ExpandableList text="Filters">
               <ExpandableListItem text="filter">
                  <DropletFill />
               </ExpandableListItem>
               <ExpandableListItem text="filter 2">
                  <DropletFill />
               </ExpandableListItem>
               <ExpandableListItem text="filter 3">
                  <DropletFill />
               </ExpandableListItem>
            </ExpandableList>

         </StyledMenu>
         <Overlay show={isOpen && mobile} hide={close} />
      </>
   )
}

export default Menu
