import React from 'react';
import PropTypes from 'prop-types';

import { HouseFill } from 'react-bootstrap-icons';

function ThisWeekendIcon({ size }) {
   return (
      <HouseFill
         color="#246fe0"
         size={size}
         className="this-weekend-icon"
      />
   )
}

ThisWeekendIcon.propTypes = {
   size: PropTypes.number.isRequired
}

export default ThisWeekendIcon
