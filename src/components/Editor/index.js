import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import DatePicker from '../common/DatePicker';
import ProjectPicker from '../common/ProjectPicker';
import LabelPicker from './LabelPicker';
import PriorityPicker from './PriorityPicker';
import ReminderPicker from './ReminderPicker';
import SubmitBtn from '../common/buttons/SubmitBtn';
import CancelBtn from '../common/buttons/CancelBtn';

const StyledEditor = styled.form`
   position: relative;
   width: 100%;

   input {
      display: block;
      width: 100%;
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
   }

   .cancel-btn, .submit-btn {
      margin: 10px 10px 0 0;
   }
`

function Editor({ currentContent, currentTargetDate, currentProjectId, currentSectionId, currentPriority, onSave, onClose, isTask }) {
   const [content, setContent] = useState(currentContent || '');
   const [targetDate, setTargetDate] = useState(currentTargetDate || null);
   const [projectId, setProjectId] = useState(currentProjectId);
   const [sectionId, setSectionId] = useState(currentSectionId || null);
   const [priority, setPriority] = useState(currentPriority || 4);

   const handleSave = (e) => {
      e.preventDefault();

      if (isTask) {
         onSave({
            content,
            targetDate,
            projectId,
            priority,
         })
      } else {
         onSave(content)
      }
      
      setContent('');
   }

   const handleKeyDown = (e) => {
      if (e.keyCode === 27) {
         onClose();
      }
   }

   return (
      <StyledEditor
         onSubmit={handleSave}
         onKeyDown={handleKeyDown}
         className="editor"
         isTask={isTask}
      >
         <input
            type="text"
            name="text"
            autoComplete="off"
            value={content}
            onChange={(e) => setContent(e.target.value)}
         />
         {isTask &&
            <section>
               <DatePicker
                  date={targetDate}
                  setDate={setTargetDate}
               />
               <ProjectPicker
                  projectId={projectId}
                  setProjectId={setProjectId}
                  sectionId={sectionId}
                  setSectionId={setSectionId}
               />
               <LabelPicker />
               <PriorityPicker 
                  priority={priority}
                  setPriority={setPriority}
               />
               <ReminderPicker />
            </section>
         }
         <SubmitBtn
            text="Add task"
            disabled={content === ''}
         />
         <CancelBtn onClick={onClose} />
      </StyledEditor>
   )
}

Editor.propTypes = {
   currentContent: PropTypes.string,
   currentProjectId: PropTypes.string,
   currentSectionId: PropTypes.string,
   onSave: PropTypes.func.isRequired,
   onClose: PropTypes.func.isRequired,
   isTask: PropTypes.bool
}

export default Editor
