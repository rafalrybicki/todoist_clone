import React from 'react';
import PropTypes from 'prop-types';

function SortListItem({ text, isActive, onClick, children }) {
   return (
      <li
         onClick={onClick}
         className={isActive ? "active" : ""}
      >
         {children} {text}
      </li>
   )
}

SortListItem.propTypes = {
   text: PropTypes.string.isRequired,
   isActive: PropTypes.bool.isRequired,
   onClick: PropTypes.func.isRequired,
   children: PropTypes.element.isRequired
}

export default SortListItem
