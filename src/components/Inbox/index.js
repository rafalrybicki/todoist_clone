import React from 'react';
import styled from 'styled-components';

import { ChatSquare, ArrowDownUp, ThreeDots } from 'react-bootstrap-icons';

import IconBtn from '../shared/IconBtn';

const StyledInbox = styled.div`
   display: flex;
   margin: 0 auto;
   width: 90%;
   max-width: 800px;
   padding-top: 30px;

   h1 {
      font-size: 20px;
      flex-grow: 1
   }

   button {
      color: grey;
      margin-left: 8px;
   }

   button:hover {
      color: #202020;
   }

   .chat-icon {
      margin-top: 2px;
   }
`

function Inbox() {
   return (
      <StyledInbox>
         <h1>Inbox</h1>
         <IconBtn tooltip="Comment" tooltipWidth="68px">
            <ChatSquare className="chat-icon" size="18"/>
         </IconBtn>
         <IconBtn tooltip="Sort" tooltipWidth="36px">
            <ArrowDownUp size="16"/>
         </IconBtn>
         <IconBtn tooltip="More project actions" tooltipWidth="128px">
            <ThreeDots size="20"/>
         </IconBtn>
      </StyledInbox>
   )
}

export default Inbox
