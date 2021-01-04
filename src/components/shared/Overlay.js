import React from 'react';
import styled from 'styled-components/macro';

const StyledOverlay = styled.span`
   position: absolute;
   top: 43px;
   left: 0;
   z-index: 100;
   visibility: ${props => props.show ? 'visible' : 'hidden'};
   width: 100%;
   height: calc(100% - 43px);
   opacity: ${props => props.show ? '0.46' : '0'};
   background-color: rgba(0,0,0,.5);
   transition: all .5s;
`

function Overlay({ show, hide }) {
   return (
      <StyledOverlay show={show} onClick={hide}></StyledOverlay>
   )
}

export default Overlay
