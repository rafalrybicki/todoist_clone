import React from 'react';
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
      height: 18px;
      width: 18px;
      font-size: 24px;
      font-weight: 300;
      margin-right: 9px;
      vertical-align: middle;
      line-height: 17px;
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
      <StyledNewitemBtn width={width} onClick={onClick}>
         <span>+</span> {text}
      </StyledNewitemBtn>
   )
}

export default NewItemBtn
