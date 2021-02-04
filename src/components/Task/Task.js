import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { updateDocument } from '../../firebase';

import StyledTask from './styled/Task';
import Editor from '../Editor/Editor';
import TaskMenu from './TaskMenu';
import Checkbox from 'components/Checkbox';
import TaskDate from './TaskDate';
import Grip from '../Grip';
import { Link } from 'react-router-dom';
import ProjectLink from '../ProjectLink';


function Task(props) {
   const { 
      id,
      content,
      priority,
      order,
      targetDate,
      isDateTime,
      completionDate,
      projectId,
      sectionId,
      ownerId,
      subTasks,
      showProjectLink,
      prevSiblingOrder,
      nextSiblingOrder
   } = props;

   const [editor, showEditor] = useState(false);
   const pathname = `${window.location.pathname}/${id}`;
   const state = {
      id,
      content,
      priority,
      order,
      targetDate,
      isDateTime,
      completionDate,
      projectId,
      sectionId,
      ownerId,
      subTasks,
      prevPath: window.location.pathname
   }

   const toggleEditor = () => {
      showEditor(editor => !editor)
   }

   const edit = (task) => {
      toggleEditor()
      updateDocument('tasks', id, task)
   }

   const toggleTaskcompletion = () => {
      if (completionDate) {
         updateDocument('tasks', id, {
            completionDate: null
         })
      } else {
         console.log('new date')
         updateDocument('tasks', id, {
            completionDate: new Date().valueOf()
         })
      }
   }

   if (editor) {
      return (
         <Editor
            currentContent={content}
            currentProjectId={projectId}
            currentSectionId={sectionId}
            currentTargetDate={targetDate}
            currentIsDateTime={isDateTime}
            currentPriority={priority}
            onSave={edit}
            onClose={toggleEditor}
            isTask
         />
      )
   }

   return (
      <StyledTask>
         <Grip />
         <Checkbox
            priority={priority}
            onClick={toggleTaskcompletion}
         />
         <Link 
            to={{ pathname, state }}
            className="link"
         >
            {content}
         </Link>
         
         <TaskMenu
            id={id}
            priority={priority}
            currentDate={targetDate}
            isDateTime={isDateTime}
            nextOrder={(order + nextSiblingOrder) / 2}
            edit={toggleEditor}
         />

         {showProjectLink &&
            <ProjectLink projectId={projectId} />
         }

         {targetDate &&
            <TaskDate
               targetDate={targetDate}
               isDateTime={isDateTime}
            />
         }
      </StyledTask>
   )
}

Task.propTypes = {
   id: PropTypes.string.isRequired,
   content: PropTypes.string.isRequired,
   priority: PropTypes.number.isRequired,
   order: PropTypes.number.isRequired,
   targetDate: PropTypes.number,
   isDateTime: PropTypes.bool.isRequired,
   completionDate: PropTypes.number,
   projectId: PropTypes.string.isRequired,
   sectionId: PropTypes.string.isRequired,
   ownerId: PropTypes.string.isRequired,
   subTasks: PropTypes.array.isRequired,
   showProjectLink: PropTypes.bool,
   prevSiblingOrder: PropTypes.number.isRequired,
   nextSiblingOrder: PropTypes.number.isRequired
}

export default Task
