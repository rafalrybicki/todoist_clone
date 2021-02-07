import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StyledExpandableList from './styled/ExpandableList'
import ChevronIcon from 'icons/ChevronIcon';

function ExpandableList({ text, children }) {
   const [open, setOpen] = useState(true);

   return (
      <StyledExpandableList
         open={open}
         className="expandable-list"
      >
         <button onClick={() => setOpen(!open)}>
            <ChevronIcon rotate={open.toString()} />
            {text}
         </button>
         <ul>
            {children}
         </ul>
      </StyledExpandableList>
   )
}

ExpandableList.propTypes = {
   text: PropTypes.string.isRequired,
   children: PropTypes.node.isRequired
}

export default ExpandableList
