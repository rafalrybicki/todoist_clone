import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import DateTimeSelector from 'components/appSelectors/DateTimeSelector/DateTimeSelector';
import ProjectPicker from 'components/appSelectors/ProjectPicker/ProjectPicker';
import LabelPicker from './LabelPicker';
import PriorityPicker from './PriorityPicker';
import ReminderPicker from './ReminderPicker';
import SubmitBtn from 'components/appButtons/SubmitBtn';
import CancelBtn from 'components/appButtons/CancelBtn';

const StyledEditor = styled.form`
   position: relative;
   width: 100%;

   > input {
      display: block;
      width: 100%;
      height: 81px;
      padding: 0 10px 40px;
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

   > .cancel-btn, > .submit-btn {
      margin: 10px 10px 0 0;
   }
`

function Editor({ currentContent, currentTargetDate, currentIsDateTime, currentProjectId, currentSectionId, currentPriority, onSave, onClose }) {
   const [content, setContent] = useState(currentContent || '');
   const [targetDate, setTargetDate] = useState(currentTargetDate || null);
   const [isDateTime, setIsDateTime] = useState(currentIsDateTime || false);
   const [projectId, setProjectId] = useState(currentProjectId || null);
   const [sectionId, setSectionId] = useState(currentSectionId || null);
   const [priority, setPriority] = useState(currentPriority || 4);

   const handleSave = (e) => {
      e.preventDefault();

      onSave({
         content,
         targetDate,
         isDateTime,
         projectId,
         sectionId,
         priority,
      })

      setContent('')
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
      >
         <input
            type="text"
            name="text"
            autoFocus
            autoComplete="off"
            value={content}
            onChange={(e) => setContent(e.target.value)}
         />
         
         <section>
            <DateTimeSelector
               miliseconds={targetDate}
               setMiliseconds={setTargetDate}
               isDateTime={isDateTime}
               setIsDateTime={setIsDateTime}
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

         <SubmitBtn
            text="Add task"
            disabled={content === currentContent || content === ''}
         />
         <CancelBtn onClick={onClose} />
      </StyledEditor>
   )
}

Editor.propTypes = {
   currentContent: PropTypes.string,
   currentTargetDate: PropTypes.number,
   currentIsDateTime: PropTypes.bool,
   currentProjectId: PropTypes.string,
   currentSectionId: PropTypes.string,
   currentPriority: PropTypes.number,
   onSave: PropTypes.func.isRequired,
   onClose: PropTypes.func.isRequired,
   isTask: PropTypes.bool
}

export default Editor