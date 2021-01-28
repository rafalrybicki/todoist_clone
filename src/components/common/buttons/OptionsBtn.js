import React from 'react'

import IconBtn from './IconBtn';
import { ThreeDots } from 'react-bootstrap-icons';

function OptionsBtn({ width = '28px'}) {
   return (
      <IconBtn
         width={width}
         tooltip="Options"
         tooltipWidth="60px"
      >
         <ThreeDots size="20"/>
      </IconBtn>
   )
}

export default OptionsBtn
