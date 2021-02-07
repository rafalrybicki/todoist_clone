import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledOverlay = styled.span`
   position: absolute;
   top: 0;
   left: 0;
   z-index: 100;
   display: ${props => props.show ? 'block' : 'none'};
   opacity: ${props => props.show ? '1' : '0'};
   width: 100%;
   height: 100%;
   background-color: rgba(0,0,0,.5);
   transition: opacity .3s;
`

function Overlay({ show, hide }) {
   return (
      <StyledOverlay
         show={show}
         onClick={hide}
      />
   )
}

Overlay.propTypes = {
   show: PropTypes.bool.isRequired,
   close: PropTypes.func.isRequired
}

export default Overlay
