import React from 'react';
import styled from 'styled-components/macro';

const StyledOverlay = styled.span`
   position: absolute;
   top: 0;
   left: 0;
   z-index: 101;
   visibility: ${props => props.show ? 'visible' : 'hidden'};
   opacity: ${props => props.show ? '1' : '0'};
   width: 100vw;
   height: 100vh;
   background-color: rgba(0,0,0,.5);
   transition: all .3s;
`

function Overlay({ show, hide }) {
   return (
      <StyledOverlay show={show} onClick={hide}></StyledOverlay>
   )
}

export default Overlay
