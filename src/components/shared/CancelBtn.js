import React from 'react';
import styled from 'styled-components';

const StyledCancelBtn = styled.button`
   padding: 7px 12px;
   font-weight: 600;
   border-radius: 3px;
   background-color: #f3f3f3;
   border: 1px solid #ddd;
   transition: all .1s;

   &:hover {
      border-color: #999;
   }
`

function CancelBtn() {
   return (
      <StyledCancelBtn type="button">
         Cancel
      </StyledCancelBtn>
   )
}

export default CancelBtn