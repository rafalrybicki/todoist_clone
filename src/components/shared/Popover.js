import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledPopover = styled.div`
   position: relative;

   > *:last-child {
      position: absolute;
      z-index: 10000;
      bottom: 0;
      right: 0;
      transform: translateY(100%);
      opacity: ${props => props.isOpen ? '1' : '0'};
      visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
      transition: all .2s;
   }
`

function Popover({ activator, content }) {
   const [open, toggle] = useState(false);
   return (
      <StyledPopover isOpen={open} onClick={() => toggle(!open)}>
         {activator}
         {content}
      </StyledPopover>
   )
}

Popover.pooptypes = {
   activator: PropTypes.node.isRequired,
   content: PropTypes.node.isRequired,
}

export default Popover
