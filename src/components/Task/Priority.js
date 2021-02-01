import React from 'react';
import PropTypes from 'prop-types';

import IconBtn from '../appButtons/IconBtn';
import PriorityIcon from '../appIcons/PriorityIcon';

function Priority({ priority, setPriority }) {
   return (
      <div>
         <IconBtn
            tooltip="Priority 1"
            tooltipWidth="60px"
            onClick={() => setPriority(1)}
            className={priority === 1 ? "active" : null}
         >
            <PriorityIcon priority={1}/>
         </IconBtn>
         <IconBtn
            tooltip="Priority 2"
            tooltipWidth="60px"
            onClick={() => setPriority(2)}
            className={priority === 2 ? "active" : null}
         >
            <PriorityIcon priority={2}/>
         </IconBtn>
         <IconBtn
           tooltip="Priority 3"
            tooltipWidth="60px"
            onClick={() => setPriority(3)}
            className={priority === 3 ? "active" : null}
         >
            <PriorityIcon priority={3}/>
         </IconBtn>
         <IconBtn
            tooltip="Priority 4"
            tooltipWidth="60px"
            onClick={() => setPriority(4)}
            className={priority === 4 ? "active" : null}
         >
            <PriorityIcon priority={4}/>
         </IconBtn>
      </div>
   )
}

Priority.porpTypes = {
   priority: PropTypes.number.isRequired,
   setPriority: PropTypes.func.isRequired
}

export default Priority
