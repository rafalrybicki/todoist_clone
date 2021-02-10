import React from 'react';

import { ShareFill } from 'react-bootstrap-icons';

function SubtasksIndicator({ quantity, completedQuantity}) {
   return (
      <span className="subtasks-indicator">
         <ShareFill size={10} /> {completedQuantity}/{quantity}
      </span>
   )
}

export default SubtasksIndicator
