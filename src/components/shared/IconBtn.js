import React from 'react';
import styled from 'styled-components';

const StyledIconBtn = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 3px;
   width: ${props => props.width};
   height: ${props => props.height};
   
   &:hover {
      background-color: ${props => props.hoverColor}
   }
`

function IconBtn({ width='32px', height='32px', hoverColor = 'white', onClick, children }) {
   return (
      <StyledIconBtn
         width={width}
         height={height}
         hoverColor={hoverColor}
         onClick={onClick ? onClick : undefined }
      >
         {children}
      </StyledIconBtn>
   )
}

export default IconBtn
