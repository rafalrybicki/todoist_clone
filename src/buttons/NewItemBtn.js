import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledNewitemBtn = styled.button`
   height: 35px;
   width: ${props => props.width};
   font-size: 14px;
   display: flex;
   align-items: center;
   color: grey;
   transition: all .2s;

   span {
      display: block;
      height: 18px;
      width: 18px;
      font-size: 24px;
      font-weight: 300;
      margin-right: 8px;
      line-height: 12px;
      padding-left: 0.8px;
      padding-bottom: 1px;
      border-radius: 50%;
      transition: background-color .1s;
   }

   &:hover {
      color: red;

      span {
         background-color: red;
         color: white;
      }
   }
`

function NewItemBtn({ text, onClick, width = "100%" }) {
   return (
      <StyledNewitemBtn
         width={width}
         onClick={onClick}
      >
         <span>+</span> 
         {text}
      </StyledNewitemBtn>
   )
}

NewItemBtn.propTypes = {
   text: PropTypes.string.isRequired,
   onClick: PropTypes.func.isRequired,
   width: PropTypes.string
}

export default NewItemBtn
