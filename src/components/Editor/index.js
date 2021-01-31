import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { getTimeArr, getBeginingOfTheDay } from '../../utils';

import DateTimeSelector from '../common/selectors/DateTimeSelector';
import ProjectPicker from '../common/ProjectPicker';
import LabelPicker from './LabelPicker';
import PriorityPicker from './PriorityPicker';
import ReminderPicker from './ReminderPicker';
import SubmitBtn from '../common/buttons/SubmitBtn';
import CancelBtn from '../common/buttons/CancelBtn';

const StyledEditor = styled.form`
   position: relative;
   width: 100%;

   > input {
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

   > .cancel-btn, > .submit-btn {
      margin: 10px 10px 0 0;
   }
`

function Editor({ currentContent, currentTargetDate, currentIsDateTime, currentProjectId, currentSectionId, currentPriority, onSave, onClose, isTask }) {
   const [content, setContent] = useState(currentContent || '');
   const [targetDate, setTargetDate] = useState(currentTargetDate || null);
   const [isDateTime, setIsDateTime] = useState(currentIsDateTime || false);
   const [projectId, setProjectId] = useState(currentProjectId || null);
   const [sectionId, setSectionId] = useState(currentSectionId || null);
   const [priority, setPriority] = useState(currentPriority || 4);

   const [timeArr, setTimeArr] = useState(isDateTime ? getTimeArr(currentTargetDate) : []);

   const addTime = (timeArr) => {
      let newMiliseconds = timeArr[1] * 60000;

      if (timeArr[2] === 'AM') {
         newMiliseconds += timeArr[0] * 3600000;
      } else {
         newMiliseconds += (timeArr[0] + 12) * 3600000;
      }

      newMiliseconds += getBeginingOfTheDay();

      setTargetDate(newMiliseconds);
      setTimeArr(timeArr);
      setIsDateTime(true)
   }

   const removeTime = () => {
      setTargetDate(getBeginingOfTheDay(targetDate))
      setTimeArr([]);
      setIsDateTime(false)
   }

   const handleSave = (e) => {
      e.preventDefault();

      if (isTask) {
         onSave({
            content,
            targetDate,
            isDateTime,
            projectId,
            sectionId,
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
               <DateTimeSelector
                  miliseconds={targetDate}
                  setDate={setTargetDate}
                  isDateTime={isDateTime}
                  timeArr={timeArr}
                  addTime={addTime}
                  removeTime={removeTime}
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
