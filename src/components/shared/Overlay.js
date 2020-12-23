import React from 'react';
import styled from 'styled-components';

const StyledOverlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   z-index: ${props => props.show ? '1' : '-100'};
   min-width: 100%;
   min-height: 100%;
   opacity: ${props => props.show ? '0.46' : '0'};
   background-color: rgb(33, 33, 33);
   transition: opacity .2s;
`

function Overlay({ show, hide }) {
   return (
      <StyledOverlay show={show} onClick={hide}></StyledOverlay>
   )
}

export default Overlay
