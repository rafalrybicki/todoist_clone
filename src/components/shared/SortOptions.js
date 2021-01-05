import React from 'react'

import MenuList from './MenuList';
import { CalendarEvent, Flag, Gear, Person, SortAlphaDown } from 'react-bootstrap-icons';

function SortOptions() {
   return (
      <MenuList>
         <li>
            <CalendarEvent size={16} />
            Sort by due date
         </li>
         <li className="active">
            <Flag size={16} />
            Sort by priority
         </li>
         <li>
            <SortAlphaDown size={16} />
            Sort alphabetically
         </li>
         <li>
            <Person size={16} />
            Sort by assignee
         </li>
         <li>
            <Gear size={16} />
            Custom sort
         </li>
      </MenuList>
   )
}

export default SortOptions
