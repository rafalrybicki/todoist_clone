import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import useOutsideClick from 'hooks/useOutsideClick';

import StyledTaskEditor from './styled/TaskEditor';
import DateTimeSelector from 'selectors/DateTimeSelector/DateTimeSelector';
import SectionSelector from 'selectors/SectionSelector/SectionSelector';
import SectionSelectorActivator from './SectionSelectorActivator';
import LabelPicker from './LabelPicker';
import PriorityPicker from './PriorityPicker';
import ReminderPicker from './ReminderPicker';
import SubmitBtn from 'buttons/SubmitBtn';
import CancelBtn from 'buttons/CancelBtn';
import DateTimeSelectorActivator from './DateTimeSelectorActivator';


function TaskEditor({ currentContent, currentTargetDate, currentIsDateTime, currentProjectId, currentSectionId, currentPriority, onSave, onClose }) {
   const [content, setContent] = useState(currentContent || '');
   const [targetDate, setTargetDate] = useState(currentTargetDate || null);
   const [isDateTime, setIsDateTime] = useState(currentIsDateTime || false);
   const [projectId, setProjectId] = useState(currentProjectId || null);
   const [sectionId, setSectionId] = useState(currentSectionId || null);
   const [priority, setPriority] = useState(currentPriority || 4);

   const taskEditorRef = useRef(null);
   
   useOutsideClick(true, taskEditorRef, onClose)

   const handleSave = (e) => {
      e.preventDefault();

      onSave({
         content,
         targetDate,
         isDateTime,
         projectId,
         sectionId,
         priority
      })

      setContent('')
   }

   const setProjectAndSection = (projectId, sectionId) => {
      setProjectId(projectId)
      setSectionId(sectionId)
   }

   const setDate = (miliseconds, isDateTime) => {
      setTargetDate(miliseconds);
      setIsDateTime(isDateTime);
   }
   
   return (
      <StyledTaskEditor
         ref={taskEditorRef}
         onSubmit={handleSave}
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
               isDateTime={isDateTime}
               onChange={setDate}
            >
               <DateTimeSelectorActivator
                  miliseconds={targetDate}
                  isDateTime={isDateTime}
               />
            </DateTimeSelector>
            <SectionSelector
               projectId={projectId}
               sectionId={sectionId}
               onChange={setProjectAndSection}
            >
               <SectionSelectorActivator
                  projectId={projectId}
                  sectionId={sectionId}
               />
            </SectionSelector>
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
      </StyledTaskEditor>
   )
}

TaskEditor.propTypes = {
   currentContent: PropTypes.string,
   currentTargetDate: PropTypes.number,
   currentIsDateTime: PropTypes.bool,
   currentProjectId: PropTypes.string,
   currentSectionId: PropTypes.string,
   currentPriority: PropTypes.number,
   onSave: PropTypes.func.isRequired,
   onClose: PropTypes.func.isRequired
}

export default TaskEditor
