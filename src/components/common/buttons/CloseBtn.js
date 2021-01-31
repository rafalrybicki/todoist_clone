import React from 'react';
import PropTypes from 'prop-types';

import IconBtn from './IconBtn';
import { X } from 'react-bootstrap-icons';

function CloseBtn({ size = 26, onClick }) {
   return (
      <IconBtn 
         width="26px"
         onClick={onClick}
         className="close-btn"
      >
         <X size={size} color="grey" />
      </IconBtn>
   )
}

CloseBtn.propTypes = {
   size: PropTypes.number,
   onClick: PropTypes.func.isRequired
}

export default CloseBtn
