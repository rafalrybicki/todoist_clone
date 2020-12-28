import React from 'react';
import { Flag, FlagFill } from 'react-bootstrap-icons';

function PriorityIcon({ priority }) {
   const colors = {
      1: 'rgb(209, 69, 59)',
      2: 'rgb(235, 137, 9)',
      3: 'rgb(36, 111, 224)',
      4: 'grey',
   }

   if (priority == 4) {
      return <Flag color={colors[priority]} size={18} />
   }

   return <FlagFill color={colors[priority]} size={18} />
}

export default PriorityIcon
