import React from 'react';

import IconBtn from './IconBtn';
import ThisWeekendIcon from '../icons/ThisWeekendIcon';

function ThisWeekendBtn() {
   return (
      <IconBtn tooltip="This weekend">
         <ThisWeekendIcon size={18} />
      </IconBtn>
   )
}

export default ThisWeekendBtn
