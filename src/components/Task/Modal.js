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

const StyledTaskModal = styled.div`
   position: absolute;
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

function Modal({ id, projectId, content, priority, endDate, completionDate, subTasks, close }) {
   return (
      <StyledTaskModal>
         <ProjectLink modal />
         <CloseBtn onClick={close} />

         <Checkbox priority="3" />
         <span className="content">task content</span>
         <DatePicker />
         <Actions modal />

         <ModalTabs />
         <div className="subtasks">
            <NewItemBtn text="Add sub-task" />
         </div>
      </StyledTaskModal>
   )
}


Modal.propTypes = {
   id: PropTypes.string.isRequired,
   content: PropTypes.string.isRequired,
   priority: PropTypes.number.isRequired,
   endDate: PropTypes.string,
   completionDate: PropTypes.string,
   subTasks: PropTypes.array,
   close: PropTypes.func.isRequired
}

export default Modal
