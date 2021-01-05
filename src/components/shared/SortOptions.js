import React from 'react';
import PropTypes from 'prop-types';

import MenuList from './MenuList';
import { CalendarEvent, Flag, Gear, Person, SortAlphaDown } from 'react-bootstrap-icons';

function SortOptions({ sortBy }) {
   return (
      <MenuList>
         <li className={sortBy === "date" ? "active" : ""}>
            <CalendarEvent size={16} /> Sort by due date
         </li>
         <li className={sortBy === "priority" ? "active" : ""}>
            <Flag size={16} /> Sort by priority
         </li>
         <li className={sortBy === "alphabetically" ? "active" : ""}>
            <SortAlphaDown size={16} />Sort alphabetically
         </li>
         <li className={sortBy === "assignee" ? "active" : ""}>
            <Person size={16} /> Sort by assignee
         </li>
         <li className={sortBy === "custom" ? "active" : ""}>
            <Gear size={16} /> Custom sortBy
         </li>
      </MenuList>
   )
}

SortOptions.propTypes = {
   sortBy: PropTypes.string.isRequired
}

export default SortOptions
