import React from 'react'

import MenuList from './MenuList';
import { CalendarEvent, Flag, Gear, Person, SortAlphaDown } from 'react-bootstrap-icons';

function SortOptions() {
   return (
      <MenuList>
         <li>
            <CalendarEvent size={15} color="grey" />
            Sort by due date
         </li>
         <li className="active">
            <Flag size={15} color="grey" />
            Sort by priority
         </li>
         <li>
            <SortAlphaDown size={15} color="grey" />
            Sort alphabetically
         </li>
         <li>
            <Person size={15} color="grey" />
            Sort by assignee
         </li>
         <li>
            <Gear size={15} color="grey" />
            Custom sort
         </li>
      </MenuList>
   )
}

export default SortOptions
