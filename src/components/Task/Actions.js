import React from 'react';
import styled from 'styled-components/macro';

import IconBtn from '../common/buttons/IconBtn';
import { Pen, ChatSquare, CalendarEvent, ThreeDots } from 'react-bootstrap-icons';
import Popover from '../common/Popover';
import TaskMenu from '../TaskMenu';

const StyledActions = styled.div`
   position: ${props => props.modal ? 'static' : 'absolute'};
   top: 0;
   padding-top: 5px;
   right: -40px;
   width: auto;
   display: flex;

   button {
      margin-right: 7px;

      svg {
         color: ${props => props.modal ? 'grey' : 'transparent'};
      }

      &.project-select-icon {
         display: none;
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

function Actions({ id, openEditor }) {
   return (
      <StyledActions className="actions">
         <IconBtn width="28px" tooltip="Edit" tooltipWidth="33px" onClick={openEditor}>
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
               <TaskMenu id={id} openEditor={openEditor} />
            }
         />
      </StyledActions>
   )
}

export default Actions
