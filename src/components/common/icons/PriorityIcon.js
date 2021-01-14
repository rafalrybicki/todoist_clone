import React from 'react';
import PropTypes from 'prop-types';

import { Flag, FlagFill } from 'react-bootstrap-icons';

function PriorityIcon({ priority }) {
   const colors = {
      1: '#de4c4a',
      2: '#f49c18',
      3: '#4073d6',
      4: 'grey',
   }

   if (priority === 4) {
      return <Flag color={colors[priority]} size={18} />
   }

   return <FlagFill color={colors[priority]} size={18} />
}

PriorityIcon.propTypes = {
   priority: PropTypes.number.isRequired
}

export default PriorityIcon
