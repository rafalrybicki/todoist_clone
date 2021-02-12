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
   overflow: visible;

   .tooltip {
      display: none;
   }

   @media screen and (min-width: 750px) {
      .tooltip {
         position: absolute;
         bottom: -25px;
         display: block;
         z-index: 101;
         color: white;
         width: max-content;
         background-color: rgba(0,0,0,.7);
         padding: 1.8px 5px 0;
         height: 20px;
         border-radius: 3px;
         font-size: 12px;
         text-align: center;
         opacity: 0;
         transition: opacity .1s
      }

      &:hover {
         background-color: ${props => props.hoverColor};

         .tooltip {
            visibility: visible;
            opacity: 1;
         }
      }
   }
`

function IconBtn({ width = '28px', height, hoverColor, onClick, tooltip, className, disabled, children }) {
   return (
      <StyledIconBtn
         type="button"
         width={width}
         height={height || width}
         hoverColor={hoverColor}
         onClick={onClick ? onClick : undefined }
         className={className ? "icon-btn " + className : "icon-btn"}
         disabled={disabled}
      >
         {children}
         {tooltip &&
            <span className="tooltip">
               {tooltip}
            </span>
         }
      </StyledIconBtn>
   )
}

IconBtn.propTypes = {
   width: PropTypes.string,
   height: PropTypes.string,
   hoverColor: PropTypes.string,
   onClick: PropTypes.func,
   tooltip: PropTypes.string,
   className: PropTypes.string,
   disabled: PropTypes.bool,
   children: PropTypes.node.isRequired,
}

export default IconBtn
