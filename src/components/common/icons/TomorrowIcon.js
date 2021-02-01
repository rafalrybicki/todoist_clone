import React from 'react';
import PropTypes from 'prop-types';

import { BrightnessHigh } from 'react-bootstrap-icons';

function TomorrowIcon({ size }) {
   return (
      <BrightnessHigh
         color="#ad6200"
         size={size}
         className="tommorow-icon"
      />
   )
}

TomorrowIcon.propTypes = {
   size: PropTypes.number.isRequired
}

export default TomorrowIcon
