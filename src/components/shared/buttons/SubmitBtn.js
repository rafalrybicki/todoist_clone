import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledSubmitBtn = styled.button`
   padding: 7px 12px;
   font-weight: 600;
   background-color: #db4c3f;
   color: white;

   &:hover {
      border-color: black;
   }

   &:disabled {
      opacity: .5
   }
`
function SubmitBtn({ text, disabled }) {
   return (
      <StyledSubmitBtn
         type="submit"
         disabled={disabled}
         className="submit-btn"
      >
         {text}
      </StyledSubmitBtn>
   )
}

SubmitBtn.propTypes = {
   text: PropTypes.string.isRequired,
   disabled: PropTypes.bool
}

export default SubmitBtn
