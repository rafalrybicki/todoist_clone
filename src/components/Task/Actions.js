import React from 'react';
import styled from 'styled-components';

import IconBtn from '../shared/IconBtn';
import { Pen, ChatSquare, CalendarEvent, ThreeDots } from 'react-bootstrap-icons';

const StyledActions = styled.div`
   position: absolute;
   top: 6px;
   height: 24px;
   right: -29px;
   width: auto;
   display: flex;
   visibility: hidden;

   button {
      margin-left: 2px;
      color: grey;
   }

   button:hover {
      color: #202020;
   }
`

function Actions() {
   return (
      <StyledActions className="actions">
         <IconBtn hoverColor="#eee" width="28px" tooltip="Edit" tooltipWidth="33px">
            <Pen size="16"/>
         </IconBtn>
         <IconBtn hoverColor="#eee" width="28px" tooltip="Schedule" tooltipWidth="64px">
            <CalendarEvent size="16"/>
         </IconBtn>
         <IconBtn hoverColor="#eee" width="28px" tooltip="Comment" tooltipWidth="68px">
            <ChatSquare className="chat-icon" size="18"/>
         </IconBtn>
         <IconBtn hoverColor="#eee" width="28px" tooltip="More task actions" tooltipWidth="112px">
            <ThreeDots size="20"/>
         </IconBtn>
      </StyledActions>
   )
}

export default Actions
