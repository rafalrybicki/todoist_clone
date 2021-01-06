import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import IconBtn from '../shared/IconBtn';
import { ListUl, Pen, ChatSquare, CalendarEvent, ThreeDots } from 'react-bootstrap-icons';
import Popover from '../shared/Popover';
import TaskMenu from '../TaskMenu';

const StyledActions = styled.div`
   position: ${props => props.modal ? 'static' : 'absolute'};
   top: 0;
   padding-top: 5px;
   right: -40px;
   width: auto;
   display: flex;
   justify-content: ${props => props.modal ? 'flex-end' : 'flex-start'};

   button {
      margin-right: ${props => props.modal ? '0' : '7px'};
      margin-left: ${props => props.modal ? '5px' : '0'};

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

function Actions({ modal }) {
   return (
      <StyledActions className="actions" modal={modal} >
         {modal &&
            <IconBtn width="26px" tooltip="Select a Project" tooltipWidth="94px">
               <ListUl size={20} />
            </IconBtn>
         }
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

Actions.propTypes = {
   modal: PropTypes.bool
}

export default Actions
