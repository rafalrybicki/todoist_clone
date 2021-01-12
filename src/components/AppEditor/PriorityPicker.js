import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Popover from '../shared/Popover';
import IconBtn from '../shared/buttons/IconBtn';
import MenuList from '../shared/MenuList';
import PriorityIcon from '../shared/icons/PriorityIcon';

function PriorityPicker({ currentPriority }) {
   const [priority, setPriority] = useState(currentPriority);

   return (
      <Popover
         activator={
            <IconBtn
               hoverColor="#eee"
               height="28px"
               width="28px"
               tooltip="Set the priority"
               tooltipWidth="92px"
            >
               <PriorityIcon priority={priority} />
            </IconBtn>
         }
         content={
            <MenuList>
               <li
                  className={priority === 1 ? "active" : "" }
                  onClick={() => setPriority(1)}
               >
                  <PriorityIcon priority={1} /> Priority 1
               </li>
               <li
                  className={priority === 2 ? "active" : "" }
                  onClick={() => setPriority(2)}
               >
                  <PriorityIcon priority={2} /> Priority 2
               </li>
               <li
                  className={priority === 3 ? "active" : "" }
                  onClick={() => setPriority(3)}
               >
                  <PriorityIcon priority={3} /> Priority 3
               </li>
               <li
                  className={priority === 4 ? "active" : "" }
                  onClick={() => setPriority(4)}
               >
                  <PriorityIcon priority={4} /> Priority 4
               </li>
            </MenuList>
         }
      />
   )
}

PriorityPicker.propTypes = {
   currentPriority: PropTypes.number.isRequired
}

export default PriorityPicker
