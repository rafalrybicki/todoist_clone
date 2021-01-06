import React from 'react';
import PropTypes from 'prop-types';

import IconBtn from './IconBtn';
import { X } from 'react-bootstrap-icons';

function CloseBtn({ onClick }) {
   return (
      <IconBtn 
         width="26px"
         onClick={onClick}
         cssClass="close-btn"
      >
         <X size={26} color="grey" />
      </IconBtn>
   )
}

CloseBtn.propTypes = {
   onClick: PropTypes.func.isRequired
}

export default CloseBtn
