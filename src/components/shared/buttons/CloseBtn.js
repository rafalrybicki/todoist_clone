import React from 'react';

import IconBtn from './IconBtn';
import { X } from 'react-bootstrap-icons';

function CloseBtn() {
   return (
      <IconBtn width="26px" cssClass="close-btn">
         <X size={26} color="grey" />
      </IconBtn>
   )
}

export default CloseBtn
