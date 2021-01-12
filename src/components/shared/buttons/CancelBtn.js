import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledCancelBtn = styled.button`
   padding: 7px 12px;
   font-weight: 600;
   background-color: #f3f3f3;
   border: 1px solid #ddd;
   transition: all .1s;

   &:hover {
      border-color: #999;
   }
`

function CancelBtn({ onClick }) {
   return (
      <StyledCancelBtn
         type="button"
         className="cancel-btn"
         onClick={onClick}
      >
         Cancel
      </StyledCancelBtn>
   )
}

CancelBtn.propTypes = {
   onClick: PropTypes.func.isRequired
}

export default CancelBtn
