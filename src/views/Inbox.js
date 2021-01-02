import React from 'react';
import styled from 'styled-components/macro';

import { ChatSquare, ArrowDownUp, ThreeDots } from 'react-bootstrap-icons';

import IconBtn from '../components/shared/IconBtn';
import Task from '../components/Task'
import TaskSection from '../components/shared/TaskSection';
import NewItemBtn from '../components/shared/NewItemBtn';
import NewSection from '../components/shared/NewSection';

const StyledInbox = styled.div`
   header button {
      margin-left: 10px;
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
         <Task priority="1" />
         <Task priority="2" />
         <Task priority="3" />
         <Task priority="4" />
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
