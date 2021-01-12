import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Checkbox from '../shared/Checkbox';
import DatePicker from '../shared/DatePicker';
import CloseBtn from '../shared/buttons/CloseBtn';
import NewItemBtn from '../shared/buttons/NewItemBtn';
import ProjectLink from './ProjectLink';
import Actions from './Actions';
import ModalTabs from './ModalTabs';
import Overlay from '../shared/Overlay';

const StyledTaskModal = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   z-index: 10000;
   background-color: white;
   width: 100%;
   max-width: 650px;
   max-height: 960px;
   padding: 56px 24px 20px;

   .close-btn {
      position: absolute;
      top: 25px;
      right: 26px;
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
      margin-top: 30px;
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

function Modal({ location, history }) {
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
               <ProjectLink modal />
               <CloseBtn onClick={close} />
               <Checkbox priority={state.priority} />
               <span className="content">{state.content}</span>
               <DatePicker />
               <Actions modal />

               <ModalTabs />
               <div className="subtasks">
                  <NewItemBtn text="Add sub-task" />
               </div>
            </StyledTaskModal>
         }
         <Overlay show={true} hide={close} />
      </>
   )
}

export default Modal
