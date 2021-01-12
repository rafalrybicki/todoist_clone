import React from 'react';
import PropTypes from 'prop-types';

import IconBtn from '../shared/buttons/IconBtn';
import PriorityIcon from '../shared/icons/PriorityIcon';

function Priority({ id }) {
   return (
      <div>
         <IconBtn width="28px" tooltip="Priority 1" tooltipWidth="60px">
            <PriorityIcon priority={1}/>
         </IconBtn>
         <IconBtn width="28px" tooltip="Priority 2" tooltipWidth="60px" cssClass="active">
            <PriorityIcon priority={2}/>
         </IconBtn>
         <IconBtn width="28px" tooltip="Priority 3" tooltipWidth="60px">
            <PriorityIcon priority={3}/>
         </IconBtn>
         <IconBtn width="28px" tooltip="Priority 4" tooltipWidth="60px">
            <PriorityIcon priority={4}/>
         </IconBtn>
      </div>
   )
}

Priority.porpTypes = {
   id: PropTypes.number.isRequired
}

export default Priority
