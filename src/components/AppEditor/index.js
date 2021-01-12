import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Popover from '../shared/Popover';
import { CalendarEvent } from 'react-bootstrap-icons';
import DatePicker from '../shared/DatePicker';
import InboxIcon from '../shared/icons/InboxIcon';
import LabelPicker from './LabelPicker';
import PriorityPicker from './PriorityPicker';
import ReminderPicker from './ReminderPicker';
import SubmitBtn from '../shared/buttons/SubmitBtn';
import CancelBtn from '../shared/buttons/CancelBtn';

const StyledAppEditor = styled.form`
   position: relative;
   width: 100%;

   input {
      display: block;
      width: ${props => props.isTask ? '100%' : 'auto'};
      height: ${props => props.isTask ? '81px' : '35px'};
      padding: ${props => props.isTask ? '0 10px 40px' : '0 10px'};
      border: 1px solid #ddd;
      border-radius: 5px;
      outline: none;

      &:focus {
         border: 1px solid grey;
      }
   }

   section {
      position: absolute;
      top: 43px;
      width: 100%;
      display: flex;

      > * {
         margin-left: 10px;

         &.label-picker {
            margin-left: auto;
            margin-right: 0;
         }
      }

      .activator {
         height: 28px;
         padding: 0 8px;
         border: 1px solid #ccc;
         border-radius: 3px;
         color: #555;

         &:hover, &:focus {
            background-color: #eee;
         }

         svg {
            margin-right: 3px;
            margin-bottom: -1.5px;
         }
      }
   }

   > button {
      margin: 10px 10px 0 0;
   }
`

function AppEditor({ currentValue, isTask, onSubmit, onClose }) {
   const [text, setText] = useState(currentValue || '')

   return (
      <StyledAppEditor
         onSubmit={onSubmit}
         isTask={isTask}
      >
         <input
            type="text"
            name="content"
            autoComplete="off"
            value={text}
            onChange={(e) => setText(e.target.value)}
         />
         { isTask &&
         <section>
            <Popover
               activator={
                  <button
                     type="button"
                     className="activator"
                  >
                     <CalendarEvent /> Today
                  </button>
               }
               content={
                  <DatePicker />
               }
            />
            <Popover
               activator={
                  <button
                     type="button"
                     className="activator"
                  >
                     <InboxIcon  size={14} /> Inbox
                  </button>
               }
               content={
                  <ul>
                     <li>project option</li>
                     <li>project option</li>
                     <li>projectOption</li>
                  </ul>
               }
            />
            <LabelPicker />
            <PriorityPicker currentPriority={4} />
            <ReminderPicker />
         </section>}
         <SubmitBtn
            text="Add task"
            disabled={text === ''}
            onClick={onSubmit}
         />
         <CancelBtn onClick={onClose} />
      </StyledAppEditor>
   )
}

AppEditor.propTypes = {
   currentValue: PropTypes.string,
   isTask: PropTypes.bool,
   onSubmit: PropTypes.func.isRequired,
   onClose: PropTypes.func.isRequired
}

export default AppEditor
