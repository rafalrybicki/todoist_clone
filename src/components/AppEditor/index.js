import React from 'react';
import styled from 'styled-components/macro';

import CancelBtn from '../shared/buttons/CancelBtn';
import SubmitBtn from '../shared/buttons/SubmitBtn';
// import PriorityPicker from '../PriorityPicker';
import ReminderPicker from './ReminderPicker';
import LabelPicker from './LabelPicker';
import DatePicker from '../shared/DatePicker';
import ProjectPicker from '../shared/ProjectPicker';

const StyledAppEditor = styled.form`
   h1 {
      height: 50px;
      font-size: 13px;
      display: flex;
      align-items: center;
   }

   section {
      position: relative;
      height: 81px;
      display: flex;

      > *:nth-child(n+2) {
         position: relative;
         margin-left: 10px;
         margin-top: 43px;
      }

      input[name="content"] {
         position: absolute;
         display: block;
         width: 100%;
         height: 100%;
         padding: 0 10px 40px;
         border: 1px solid #ddd;
         border-radius: 5px;
         outline: none;
      }

      input[name="content"]:focus {
         border: 1px solid grey;
      }
   }

   > button {
      margin: 10px 10px 0 0;
   }
`

function AppEditor({ headerText }) {
   const onTaskSubmit = (e) => {
      e.preventDefault();
      console.log('add or edit');
   }

   return (
      <StyledAppEditor onSubmit={onTaskSubmit}>
         {headerText && <h1>{headerText}</h1>}
         <section>
            <input
               type="text"
               name="content"
               autoComplete="off"
            />
            <DatePicker />
            <ProjectPicker />
            <LabelPicker />
            {/* <PriorityPicker currentPriority={4} /> */}
            <ReminderPicker />
         </section>
         <SubmitBtn text="Add task" />
         <CancelBtn />
      </StyledAppEditor>
   )
}

export default AppEditor
