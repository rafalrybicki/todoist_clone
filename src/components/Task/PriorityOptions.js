import React from 'react';
import PropTypes from 'prop-types';

import IconBtn from 'buttons/IconBtn';
import PriorityIcon from 'icons/PriorityIcon';

function PriorityOptions({ priority, setPriority }) {
   return (
      <div className="options">
         <IconBtn
            tooltip="Priority 1"
            onClick={() => setPriority(1)}
            className={priority === 1 ? "active" : null}
         >
            <PriorityIcon priority={1}/>
         </IconBtn>
         <IconBtn
            tooltip="Priority 2"
            onClick={() => setPriority(2)}
            className={priority === 2 ? "active" : null}
         >
            <PriorityIcon priority={2}/>
         </IconBtn>
         <IconBtn
           tooltip="Priority 3"
            onClick={() => setPriority(3)}
            className={priority === 3 ? "active" : null}
         >
            <PriorityIcon priority={3}/>
         </IconBtn>
         <IconBtn
            tooltip="Priority 4"
            onClick={() => setPriority(4)}
            className={priority === 4 ? "active" : null}
         >
            <PriorityIcon priority={4}/>
         </IconBtn>
      </div>
   )
}

PriorityOptions.porpTypes = {
   priority: PropTypes.number.isRequired,
   setPriority: PropTypes.func.isRequired
}

export default PriorityOptions
