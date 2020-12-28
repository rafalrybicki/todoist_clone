import React from 'react';
import styled from 'styled-components';

import IconBtn from '../shared/IconBtn';
import { Tag, Alarm, CalendarEvent, InboxFill } from 'react-bootstrap-icons';
import CancelBtn from '../shared/CancelBtn';
import SubmitBtn from '../shared/SubmitBtn';
import PriorityPicker from './PriorityPicker';

const StyledNewTask = styled.form`
   position: absolute;
   display: flex;
   flex-direction: column;
   top: 80px;
   left: 50%;
   width: 550px;
   min-height: 193px;
   transform: translateX(-50%);
   border-radius: 5px;
   z-index: 1000;
   border: 1px solid #ddd;
   padding: 0 24px;

   header {
      height: 50px;
      display: flex;
      align-items: center;

      h1 {
         font-size: 13px;
      }
   }

   section {
      position: relative;
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      textarea {
         width: 100%;
         min-height: 81px;
         padding: 10px 10px 28px;
         border: 1px solid #ddd;
         border-radius: 5px;
         height: auto;
         outline: none;
         resize: none;
      }

      textarea:focus {
         border-color: grey;
      }

      button {
         background-color: white;
         border-color: #ccc;
         margin-left: 10px;
         height: 28px;
      }

      button:hover {
         background-color: #eeeeee;
      }

      > div {
         position: absolute;
         bottom: 10px;
         width: 100%;
         display: flex;
         padding-right: 10px;

         .inbox {
            margin-right: auto;
         }
      }
   }

   footer {
      height: 62px;
      padding: 10px 0 20px;
      display: flex;
      justify-content: flex-end;

      button:nth-of-type(2) {
         margin-left: 10px;
      }
   }
`

function NewTask({ headerText }) {
   return (
      <StyledNewTask>
         <header>
            <h1>{headerText}</h1>
         </header>
         <section>
            <textarea />
            <div>
               <button className="btn today">
                  <CalendarEvent /> Today
               </button>
               <button className="btn inbox">
                  <InboxFill /> Inbox
               </button>
               <IconBtn hoverColor="#eee" height="28px" width="28px">
                  <Tag color="grey" size={20} />
               </IconBtn>
               <PriorityPicker currentPriority={4} />
               <IconBtn hoverColor="#eee" height="28px" width="28px">
                  <Alarm color="grey" size={18} />
               </IconBtn>
            </div>
         </section>
         <footer>
            <SubmitBtn text="Add task" disabled={true} />
            <CancelBtn />
         </footer>
      </StyledNewTask>
   )
}

export default NewTask
