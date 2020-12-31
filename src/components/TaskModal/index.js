import React from 'react';
import styled from 'styled-components/macro';

import InboxIcon from '../shared/InboxIcon';
import Checkbox from '../shared/Checkbox';
import DatePicker from '../shared/DatePicker';
import { Alarm, FlagFill, ListUl, Tag, ThreeDots, X } from 'react-bootstrap-icons';
import IconBtn from '../shared/IconBtn';
import NewItemBtn from '../shared/NewItemBtn';
import Task from '../Task';

const StyledTaskModal = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   z-index: 10000;
   background-color: white;
   width: 100%;
   max-width: 650px;
   height: 100%;
   padding: 56px 24px 20px;
   border: 1px solid black;

   .project-btn {
      position: absolute;
      top: 25px;
      left: 24px;
      color: #202020;
      font-size: 13px;
      font-family: Arial, Helvetica, sans-serif;
      
      svg {
         margin-right: 7px;
         margin-bottom: -2px;
      }
   }

   .close-btn {
      position: absolute;
      top: 25px;
      right: 26px;

      svg {
         transform: scale(1.3)
      }
   }

   > .checkbox {
      top: 57px;
      left: 24px;
   }

   > .content {
      margin-left: 28px;
      display: block;
      flex-grow: 1;
   }

   .date-picker {
      margin: 10px 0 0 28px;
   }

   .actions {
      display: flex;
      justify-content: flex-end;

      button {
         margin-left: 7px;
      }
   }

   .tabs {
      margin-top: 10px;
      display: flex;
      
      
      button {
         flex-grow: 1;
         font-family: Arial, Helvetica, sans-serif;
         height: 32px;
         border: 0;
         border-radius: 0;
         color: grey;
         border-bottom: 1px solid #e0e0e0;
      }

      button.active {
         color: #202020;
         border-bottom: 1px solid #202020;
         font-weight: bold;
      }
   }

   .subtasks {
      padding: 10px 20px;
   }

   @media(min-width: 650px) {
      height: calc(100% - 50px);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;
   }
`

function TaskModal() {
   return (
      <StyledTaskModal>
         <button className="project-btn">
            <InboxIcon size={14} /> Inbox
         </button>
         <IconBtn width="26px" hoverColor="#eee" cssClass="close-btn">
            <X size={26} color="grey" />
         </IconBtn>
         <Checkbox priority="3" />
         <span className="content">task content</span>
         <DatePicker />
         <div className="actions">
            <IconBtn width="26px" hoverColor="#eee">
               <ListUl size={22} color="grey" />
            </IconBtn>
            <IconBtn width="26px" hoverColor="#eee">
               <Tag size={20} color="grey" />
            </IconBtn>
            <IconBtn width="26px" hoverColor="#eee">
               <FlagFill size={17} color="blue" />
            </IconBtn>
            <IconBtn width="26px" hoverColor="#eee">
               <Alarm size={17} color="grey" />
            </IconBtn>
            <IconBtn width="26px" hoverColor="#eee">
               <ThreeDots size={20} color="grey" />
            </IconBtn>
         </div>
         <div className="tabs">
            <button>Sub-tasks</button>
            <button className="active">Comments</button>
            <button>Activity</button>
         </div>
         <div className="subtasks">
            <Task priority="1" />
            <Task priority="2" />
            <Task priority="3" />
            <Task priority="4" />
            <NewItemBtn text="Add sub-task" />
         </div>
      </StyledTaskModal>
   )
}

export default TaskModal
