import React from 'react';
import PropTypes from 'prop-types';

import { ThreeDots } from 'react-bootstrap-icons';

function NoDateIcon({ size }) {
   return <ThreeDots color="grey" size={size} />
}

NoDateIcon.propTypes = {
   size: PropTypes.number.isRequired
}

export default NoDateIcon
