import React from 'react';
import styled from 'styled-components/macro';

const StyledIconBtn = styled.button`
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   width: ${props => props.width};
   height: ${props => props.height};

   @media screen and (min-width: 750px) {
      &::after {
         position: absolute;
         z-index: 1001;
         bottom: -31px;
         content: "${props => props.tooltip}";
         color: white;
         display: none;
         background-color: rgba(0,0,0,.7);
         padding: 3px 0 1px;
         width: ${props => props.tooltipWidth};
         height: 20px;
         border-radius: 3px;
         font-size: 12px;
         text-align: center;
      }

      &:hover {
         background-color: ${props => props.hoverColor};

         &::after {
            display: block
         }
      }
   }
`

function IconBtn({ width='32px', height, onClick, tooltip, tooltipWidth, cssClass, children }) {
   return (
      <StyledIconBtn
         width={width}
         height={height || width}
         onClick={onClick ? onClick : undefined }
         type="button"
         tooltip={tooltip}
         tooltipWidth={tooltipWidth}
         className={cssClass ? "icon-btn " + cssClass : "icon-btn"}
      >
         {children}
      </StyledIconBtn>
   )
}

export default IconBtn
