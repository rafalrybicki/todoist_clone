import React from 'react';
import PropTypes from 'prop-types';

import IconBtn from './IconBtn';
import { ThreeDots } from 'react-bootstrap-icons';

function OptionsBtn({ width = '28px', onClick }) {
   return (
      <IconBtn
         width={width}
         tooltip="Options"
         tooltipWidth="60px"
         className="options-btn"
         onClick={onClick}
      >
         <ThreeDots size="20"/>
      </IconBtn>
   )
}

OptionsBtn.propTypes = {
   width: PropTypes.string,
   onClick: PropTypes.func
}

export default OptionsBtn
