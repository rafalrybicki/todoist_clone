import React from 'react';
import PropTypes from 'prop-types';

import Popover from 'components/Popover';
import IconBtn from 'buttons/IconBtn';
import MenuList from 'components/MenuList';
import PriorityIcon from 'icons/PriorityIcon';

function PriorityPicker({ priority, setPriority }) {
   return (
      <Popover
         activator={
            <IconBtn
               hoverColor="#eee"
               height="28px"
               width="28px"
               tooltip="Set the priority"
            >
               <PriorityIcon priority={priority} />
            </IconBtn>
         }
      >
         <MenuList>
            <li
               className={priority === 1 ? "active" : "" }
               onClick={() => setPriority(1)}
            >
               <PriorityIcon
                  priority={1}
               />
               Priority 1
            </li>
            <li
               className={priority === 2 ? "active" : "" }
               onClick={() => setPriority(2)}
            >
               <PriorityIcon
                  priority={2}
               />
               Priority 2
            </li>
            <li
               className={priority === 3 ? "active" : "" }
               onClick={() => setPriority(3)}
            >
               <PriorityIcon
                  priority={3}
               />
               Priority 3
            </li>
            <li
               className={priority === 4 ? "active" : "" }
               onClick={() => setPriority(4)}
            >
               <PriorityIcon
                  priority={4}
               />
               Priority 4
            </li>
         </MenuList>   
      </Popover>
   )
}

PriorityPicker.propTypes = {
   priority: PropTypes.number.isRequired,
   setPriority: PropTypes.func.isRequired
}

export default PriorityPicker
