import React from 'react';

import IconBtn from './IconBtn';
import TomorrowIcon from '../appIcons/TomorrowIcon';

function TomorrowBtn() {
   return (
      <IconBtn tooltip="Tomorrow">
         <TomorrowIcon size={20} />
      </IconBtn>
   )
}

export default TomorrowBtn
