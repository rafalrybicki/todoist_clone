import React from 'react';

import IconBtn from './IconBtn';
import TodayIcon from '../icons/TodayIcon.js';

function TodayBtn() {
   return (
      <IconBtn tooltip="Today">
         <TodayIcon size={18} />
      </IconBtn>
   )
}

export default TodayBtn
