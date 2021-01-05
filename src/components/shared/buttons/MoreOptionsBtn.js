import React from 'react';

import IconBtn from './IconBtn';
import MoreOptionsIcon from '../icons/MoreOptionsIcon'

function MoreOptionsBtn() {
   return (
      <IconBtn tooltip="More">
         <MoreOptionsIcon size={18} />
      </IconBtn>
   )
}

export default MoreOptionsBtn
