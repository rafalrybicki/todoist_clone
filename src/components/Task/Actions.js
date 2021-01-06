import React from 'react';
import styled from 'styled-components/macro';

import IconBtn from '../shared/IconBtn';
import { Pen, ChatSquare, CalendarEvent, ThreeDots } from 'react-bootstrap-icons';
import Popover from '../shared/Popover';
import TaskMenu from '../TaskMenu';

const StyledActions = styled.div`
   position: absolute;
   top: 0;
   height: 100%;
   padding-top: 6px;
   right: -40px;
   width: auto;
   display: flex;
   padding-right: 10px;

   button {
      margin-left: 4px;

      svg {
         color: transparent;
      }
   }

   &:hover {
      button svg {
         color: grey;
      }

      button:hover svg {
         color: #202020;
      }
   }
`

function Actions() {
   return (
      <StyledActions className="actions">
         <IconBtn width="28px" tooltip="Edit" tooltipWidth="33px">
            <Pen size="16"/>
         </IconBtn>
         <IconBtn width="28px" tooltip="Schedule" tooltipWidth="64px">
            <CalendarEvent size="16"/>
         </IconBtn>
         <IconBtn width="28px" tooltip="Comment" tooltipWidth="68px">
            <ChatSquare className="chat-icon" size="18"/>
         </IconBtn>
         <Popover
            activator={
               <IconBtn width="28px" tooltip="More task actions" tooltipWidth="112px">
                  <ThreeDots size="20"/>
               </IconBtn>
            }
            content={
               <TaskMenu />
            }
         />
      </StyledActions>
   )
}

export default Actions
