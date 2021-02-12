import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledOverlay = styled.span`
   position: absolute;
   top: 0;
   left: 0;
   z-index: 99;
   visibility: ${props => props.show ? 'visible' : 'hidden'};
   opacity: ${props => props.show ? '1' : '0'};
   width: 100%;
   height: 100%;
   background-color: rgba(0,0,0,.5);
   transition: all .3s;
`

function Overlay({ show, hide }) {
   return (
      <StyledOverlay
         show={show}
         onClick={hide}
         className="overlay"
      />
   )
}

Overlay.propTypes = {
   show: PropTypes.bool.isRequired,
   hide: PropTypes.func.isRequired
}

export default Overlay
