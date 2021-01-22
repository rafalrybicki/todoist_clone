import React, { useState } from 'react';
import styled from 'styled-components/macro';

import Checkbox from '../common/Checkbox';
import DatePicker from '../common/DatePicker';
import CloseBtn from '../common/buttons/CloseBtn';
import ProjectLink from '../common/ProjectLink';
import Actions from './Actions';
import Tabs from './Tabs';
import Overlay from '../common/Overlay';
import Subtasks from './Subtasks';
import Comments from './Comments';
import Activity from './Activity';

const StyledTaskModal = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   z-index: 101;
   background-color: white;
   width: 100%;
   max-width: 650px;
   height: 100%;
   max-height: 960px;
   padding: 56px 24px 20px;

   .project-link {
      font-size: 13px;
      top:  25px;
      left: 24px;

      svg {
         margin: 2.5px 15px 0 4px;

         &.inbox-icon {
            margin: 2px 12px 0 2px;
         }
      }
   }

   .close-btn {
      position: absolute;
      top: 25px;
      right: 26px;
   }

   > .checkbox {
      top: 58px;
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

   @media (min-width: 650px) {
      height: calc(100vh - 40px);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;
   }
`

function TaskModal({ location, history }) {
   const [activeTab, setActiveTab] = useState('subtasks')
   let state;

   if (location.state) {
      state = location.state
   } else {
      alert('implement firebase!');
      history.push('/inbox');
   }

   const close = () => {
      history.push(state.prevPath)
   }

   return (
      <>
         {state &&
            <StyledTaskModal>
               <ProjectLink id='2' projectName="Project Name"/>
               <CloseBtn onClick={close} />
               <Checkbox priority={state.priority} />
               <span className="content">{state.content}</span>
               <DatePicker />
               <Actions />
               <Tabs
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
               />
               <Subtasks show={activeTab === 'subtasks'} />
               <Comments show={activeTab === 'comments'} />
               <Activity show={activeTab === 'activity'} />
            </StyledTaskModal>
         }
         <Overlay show={true} hide={close} />
      </>
   )
}

export default TaskModal
