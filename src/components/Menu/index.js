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
            <ListItem text="Inbox 6">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="inbox" fill="#246FE0" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z"/>
               </svg>
            </ListItem>
            <ListItem text="Today 2">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#058527" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
               </svg>
            </ListItem>
            <ListItem text="Upcoming">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#692FC2" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                  <path fillRule="evenodd" d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
               </svg>
            </ListItem>
         </ul>
         
         <ExpandableList text="Projects">
            <ExpandableListItem text="project">
               <span className="dot-icon" />
            </ExpandableListItem>
            <ExpandableListItem text="project 2">
               <span className="dot-icon" />
            </ExpandableListItem>
            <ExpandableListItem text="project 3">
               <span className="dot-icon" />
            </ExpandableListItem>
         </ExpandableList>

         <ExpandableList text="Filters">
            <ExpandableListItem text="filter">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="filter-icon" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z"/>
               </svg>
            </ExpandableListItem>
            <ExpandableListItem text="filter">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="filter-icon" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z"/>
               </svg>
            </ExpandableListItem>
            <ExpandableListItem text="filter">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="filter-icon" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z"/>
               </svg>
            </ExpandableListItem>
         </ExpandableList>
      </StyledMenu>
   )
}

export default Menu
