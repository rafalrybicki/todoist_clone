import React from 'react';
import styled from 'styled-components/macro';

const StyledOverlay = styled.span`
   position: absolute;
   top: 43px;
   left: 0;
   z-index: 100;
   visibility: ${props => props.show ? 'visible' : 'hidden'};
   opacity: ${props => props.show ? '1' : '0'};
   width: 100%;
   height: calc(100% - 43px);
   background-color: rgba(0,0,0,.5);
   transition: all .3s;
`

function Overlay({ show, hide }) {
   return (
      <StyledOverlay show={show} onClick={hide}></StyledOverlay>
   )
}

export default Overlay
