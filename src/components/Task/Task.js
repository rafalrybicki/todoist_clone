import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import useUserId from 'hooks/useUserId';
import { updateDocument } from 'firebase/index.js';
import { updateTask } from 'redux/actions';

import StyledTask from './styled/Task';
import TaskEditor from 'components/TaskEditor/TaskEditor';
import TaskMenu from './TaskMenu';
import Checkbox from 'components/Checkbox';
import TaskDate from 'components/TaskDate';
// import Grip from 'components/Grip';
import { Link } from 'react-router-dom';
import ProjectLink from 'components/ProjectLink';
import SubtasksIndicator from './SubtasksIndicator';

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
      subtasks,
      subtasksQuantity,
      completedSubtasksQuantity,
      showProjectLink,
      prevSiblingOrder,
      nextSiblingOrder,
      modal
   } = props;

   const [editor, showEditor] = useState(false);
   const userId = useUserId();
   const dispatch = useDispatch();
   let pathname;

   if (window.location.pathname.includes('today')) {
      pathname = `/today/${id}`;
   } else if (projectId === userId) {
      pathname = '/inbox/' + id;
   } else {
      pathname = `/project/${projectId}/${id}`;
   }
   
   const toggleEditor = () => {
      showEditor(editor => !editor);
   }

   const edit = (task) => {
      toggleEditor()
      updateDocument('tasks', id, task);
      dispatch(updateTask(id, task));
   }

   const toggleTaskcompletion = () => {
      if (completionDate) {
         const field = {
            completionDate: null
         };

         updateDocument('tasks', id, field);
         dispatch(updateTask(id, field));
      } else {
         const field = {
            completionDate: new Date().valueOf()
         };

         updateDocument('tasks', id, field);
         dispatch(updateTask(id, field));
      }
   }

   if (editor) {
      return (
         <TaskEditor
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
      <StyledTask
         isCompleted={completionDate > 0}
         className="task"
      >
         {/* <Grip /> */}
         <Checkbox
            isCompleted={completionDate > 0}
            priority={priority}
            onClick={toggleTaskcompletion}
         />
         {modal ? 
            <span className="link">
               {content}
            </span>
            :
            <Link 
               to={pathname}
               className="link"
            >
               {content}
            </Link>
         }
         
         <TaskMenu
            id={id}
            priority={priority}
            currentDate={targetDate}
            isDateTime={isDateTime}
            completionDate={completionDate}
            nextOrder={(order + nextSiblingOrder) / 2}
            edit={toggleEditor}
            projectId={projectId}
         />

         {!modal && subtasksQuantity > 0 &&
            <SubtasksIndicator
               quantity={subtasksQuantity}
               completedQuantity={completedSubtasksQuantity}
            />
         }

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
   subtasks: PropTypes.object.isRequired,
   subtasksQuantity: PropTypes.number.isRequired,
   completedSubtasksQuantity: PropTypes.number.isRequired,
   showProjectLink: PropTypes.bool,
   prevSiblingOrder: PropTypes.number,
   nextSiblingOrder: PropTypes.number,
   modal: PropTypes.bool
}

export default Task
