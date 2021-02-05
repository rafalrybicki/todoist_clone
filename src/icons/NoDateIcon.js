import React from 'react';
import PropTypes from 'prop-types';

import { SlashCircle } from 'react-bootstrap-icons';

function NoDateIcon({ size }) {
   return (
      <SlashCircle
         color="grey"
         size={size}
         className="no-date-icon"
      />
   )
}

NoDateIcon.propTypes = {
   size: PropTypes.number.isRequired
}

export default NoDateIcon
