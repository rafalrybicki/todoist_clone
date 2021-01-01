import React from 'react';
import styled from 'styled-components/macro';

import { ChatSquare, ArrowDownUp, ThreeDots } from 'react-bootstrap-icons';

import IconBtn from '../shared/IconBtn';
import Task from '../Task'
import TaskSection from '../shared/TaskSection';
import NewItemBtn from '../shared/NewItemBtn';
import NewSection from '../shared/NewSection';

const StyledInbox = styled.div`
   > header {
      flex-grow: 1;
      display: flex;
      height: 29px;
      margin-bottom: 10px;
   }

   h1 {
      flex-grow: 1
   }

   header button {
      color: grey;
   }

   header button:hover {
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
         <NewItemBtn text="Add task" onClick={() => console.log('new task')} />
         <NewSection />
         <TaskSection name="ToDo section">
            <Task priority="1" />
            <Task priority="2" />
            <Task priority="3" />
            <Task priority="4" />
            <NewItemBtn text="Add task" onClick={() => console.log('new task')} />
         </TaskSection>
         <NewSection />
      </StyledInbox>
   )
}

export default Inbox
