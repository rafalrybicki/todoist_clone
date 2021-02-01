import React from 'react';

import IconBtn from './IconBtn';
import NextWeekIcon from '../appIcons/NextWeekIcon';

function NextWeekBtn() {
   return (
      <IconBtn tooltip="Next week">
         <NextWeekIcon size={17} />
      </IconBtn>
   )
}

export default NextWeekBtn
