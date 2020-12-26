import React from 'react';
import styled from 'styled-components';

const StyledSubmitBtn = styled.button`
   padding: 7px 12px;
   font-weight: 600;
   border-radius: 3px;
   background-color: #db4c3f;
   color: white;
`
function SubmitBtn({ text, disabled }) {
   return (
      <StyledSubmitBtn type="submit" disabled={disabled}>
         {text}
      </StyledSubmitBtn>
   )
}

export default SubmitBtn
