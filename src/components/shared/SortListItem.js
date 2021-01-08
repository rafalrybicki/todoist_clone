import React from 'react';
import PropTypes from 'prop-types';

function SortListItem({ changeSorting, value, active, children }) {
   let text;

   switch(value) {
      case 'date':
         text = 'Sort by due date';
         break;
      case 'priority':
         text = 'Sort by priority';
         break;
      case 'content':
         text = 'Sort alphabetically';
         break; 
      case 'assignee':
         text = 'Sort by assignee';
         break; 
      default:
         text = 'Custom sort';
   }

   const sort = () => {
      changeSorting(value)
   }

   return (
      <li
         onClick={sort}
         className={active ? "active" : ""}
      >
         {children} {text}
      </li>
   )
}

SortListItem.propTypes = {
   changeSorting: PropTypes.func.isRequired,
   value: PropTypes.string.isRequired,
   active: PropTypes.bool.isRequired,
   children: PropTypes.element.isRequired
}

export default SortListItem
