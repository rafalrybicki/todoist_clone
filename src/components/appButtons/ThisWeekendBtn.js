import React from 'react';

import IconBtn from './IconBtn';
import ThisWeekendIcon from '../appIcons/ThisWeekendIcon';

function ThisWeekendBtn() {
   return (
      <IconBtn tooltip="This weekend">
         <ThisWeekendIcon size={18} />
      </IconBtn>
   )
}

export default ThisWeekendBtn
