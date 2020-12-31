import React from 'react';
import PropTypes from 'prop-types';

import { InboxFill } from 'react-bootstrap-icons';

function InboxIcon({ size }) {
   return (
      <InboxFill size={size} color="#246fe0" className="inbox-icon" />
   )
}

InboxIcon.propTypes = {
   size: PropTypes.number.isRequired
}

export default InboxIcon
