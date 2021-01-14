import React from 'react';

import IconBtn from './IconBtn';
import NoDateIcon from '../icons/NoDateIcon';

function NoDateBtn() {
   return (
      <IconBtn tooltip="No date">
         <NoDateIcon />
      </IconBtn>
   )
}

export default NoDateBtn
