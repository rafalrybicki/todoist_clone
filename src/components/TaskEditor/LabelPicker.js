import React from 'react';

import IconBtn from 'buttons/IconBtn';
import { Tag } from 'react-bootstrap-icons';


function LabelPicker() {
   return (
      <div
         onClick={() => alert('coming soon')}
         className="label-picker"
      >
         <IconBtn
            hoverColor="#eee"
            width="28px"
            tooltip="Add label(s)"
         >
            <Tag
               color="grey"
               size={20}
            />
         </IconBtn>
      </div>
   )
}

export default LabelPicker
