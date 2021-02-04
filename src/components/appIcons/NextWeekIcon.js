import React from 'react';
import PropTypes from 'prop-types';

import { SkipForwardFill } from 'react-bootstrap-icons';

function NextWeekIcon({ size }) {
   return (
      <SkipForwardFill
         color="#006400"
         size={size}
         className="next-week-icon"
      />
   )
}

NextWeekIcon.propTypes = {
   size: PropTypes.number.isRequired
}

export default NextWeekIcon
