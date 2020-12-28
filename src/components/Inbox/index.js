import React from 'react';
import styled from 'styled-components';

import { ChatSquare, ArrowDownUp, ThreeDots } from 'react-bootstrap-icons';

import IconBtn from '../shared/IconBtn';
import Task from '../Task'

const StyledInbox = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   align-content: flex-start;
   margin: 0 auto;
   width: 90%;
   max-width: 800px;
   padding: 30px 40px;;

   > header {
      flex-grow: 1;
      display: flex;
      height: 29px;
      margin-bottom: 10px;
   }

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
         <header>
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
         </header>
         <Task priority="1" />
         <Task priority="2" />
         <Task priority="3" />
         <Task priority="4" />
      </StyledInbox>
   )
}

export default Inbox
