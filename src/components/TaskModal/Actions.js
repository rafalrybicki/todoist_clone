import React from 'react';
import styled from 'styled-components/macro';

import IconBtn from '../common/buttons/IconBtn';
import { ListUl, Pen, ChatSquare, CalendarEvent, ThreeDots } from 'react-bootstrap-icons';
import Popover from '../common/Popover';
import TaskMenu from '../TaskMenu';

const StyledActions = styled.div`
   padding-top: 5px;
   width: auto;
   display: flex;
   justify-content: flex-end;

   button {
      margin-left: 5px;

      svg {
         color: grey;
      }

      &.project-select-icon {
         display: none;
      }

      &:hover {
         background-color: #eee;

         svg {
            color: #202020;
         }
      }
   }
`

function Actions() {
   return (
      <StyledActions className="actions" >
         <IconBtn width="26px" tooltip="Select a Project" tooltipWidth="94px">
            <ListUl size={20} />
         </IconBtn>
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
