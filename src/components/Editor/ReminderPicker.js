import React from 'react';
import styled from 'styled-components/macro';

import IconBtn from '../common/buttons/IconBtn';
import { Alarm } from 'react-bootstrap-icons';

const StyledReminderPicker = styled.div`
   margin-right: 10px;
`

function ReminderPicker() {
   return (
      <StyledReminderPicker onClick={() => console.log('coming soon')}>
         <IconBtn
            hoverColor="#eee"
            width="28px"
            tooltip="Add reminder(s)"
            tooltipWidth="104px"
         >
            <Alarm
               color="grey"
               size={18}
            />
         </IconBtn>
      </StyledReminderPicker>
   )
}

export default ReminderPicker
