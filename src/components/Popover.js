import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import useOutsideClick from 'hooks/useOutsideClick';

const StyledPopover = styled.div`
   position: relative;

   > *:last-child {
      position: absolute;
      z-index: 10000;
      right: 0;
      opacity: ${props => props.isOpen ? '1' : '0'};
      visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
      transition: all .2s;
   }
`

function Popover({ activator, className, children }) {
   const [open, toggle] = useState(false);
   const popoverRef = useRef(null);

   useOutsideClick(open, popoverRef, () => toggle(false));

   return (
      <StyledPopover
         ref={popoverRef}
         isOpen={open}
         onClick={() => toggle(!open)}
         className={"popover " + className} 
      >
         {activator}
         {children}
      </StyledPopover>
   )
}

Popover.pooptypes = {
   activator: PropTypes.node.isRequired,
   className: PropTypes.string,
   children: PropTypes.node.isRequired,
}

export default Popover
