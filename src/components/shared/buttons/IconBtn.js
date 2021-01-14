import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledIconBtn = styled.button`
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   width: ${props => props.width};
   height: ${props => props.height};

   @media screen and (min-width: 750px) {
      span {
         position: absolute;
         z-index: 1001;
         bottom: -31px;
         color: white;
         display: block;
         width: ${props => props.tooltipWidth};
         background-color: rgba(0,0,0,.7);
         padding-top: 1.5px;
         height: 20px;
         border-radius: 3px;
         font-size: 12px;
         text-align: center;
         opacity: 0;
         transition: opacity .1s
      }

      &:hover {
         background-color: ${props => props.hoverColor};

         span {
            opacity: 1;
         }
      }
   }
`

function IconBtn({ width='32px', height, hoverColor, onClick, tooltip, tooltipWidth, className, disabled, children }) {
   return (
      <StyledIconBtn
         type="button"
         width={width}
         height={height || width}
         hoverColor={hoverColor}
         tooltipWidth={tooltipWidth}
         onClick={onClick ? onClick : undefined }
         className={className ? "icon-btn " + className : "icon-btn"}
         disabled={disabled}
      >
         {children}
         {tooltip && <span>{tooltip}</span>}
      </StyledIconBtn>
   )
}

IconBtn.propTypes = {
   width: PropTypes.string,
   height: PropTypes.string,
   hoverColor: PropTypes.string,
   onClick: PropTypes.func,
   tooltip: PropTypes.string,
   tooltipWidth: PropTypes.string,
   className: PropTypes.string,
   disabled: PropTypes.bool,
   children: PropTypes.node.isRequired,
}

export default IconBtn
