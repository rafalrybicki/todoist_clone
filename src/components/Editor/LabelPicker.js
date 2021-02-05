import React from 'react';
import styled from 'styled-components/macro';

import IconBtn from 'buttons/IconBtn';
import { Tag } from 'react-bootstrap-icons';

const StyledlabelPicker = styled.div`
`


function LabelPicker() {
   return (
      <StyledlabelPicker
         onClick={() => console.log('coming soon')}
         className="label-picker"
      >
         <IconBtn
            hoverColor="#eee"
            width="28px"
            tooltip="Add label(s)"
            tooltipWidth="80px"
         >
            <Tag
               color="grey"
               size={20}
            />
         </IconBtn>
      </StyledlabelPicker>
   )
}

export default LabelPicker
