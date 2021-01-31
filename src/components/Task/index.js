import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { updateDocument } from '../../firebase';

import Editor from '../Editor';
import Actions from './Actions';
import Checkbox from '../common/Checkbox';
import Date from './Date';
import Grip from '../common/Grip';
import { Link } from 'react-router-dom';
import ProjectLink from '../common/ProjectLink';

const StyledTask = styled.li`
   position: relative;
   width: 100%;
   min-height: 56px;
   padding: 0;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   cursor: pointer;
   border-bottom: 1px solid #f0f0f0;
   font-size: 14px;

   .link {
      display: block;
      width: 100%;
      height: 100%;
      padding: 4px 0 24px 27px;
   }

   .grip {
      top: 4px;
      left: -32px;
   }

   &:hover {
      .grip svg,.actions svg {
         color: grey;
      }
   }

   .checkbox {
      top: 9px;
   }

   .arrow-icon {
      top: 5px;
      left: 6px;
   }

   .project-link {
      font-size: 12px;
      bottom:  5px;
      right: 10px;

      svg {
         margin-right: 4px;
         margin-top: .8px;
      }
   }
`

function Task(props) {
   const { 
      id,
      content,
      priority,
      endDate,
      projectId,
      projectName,
      projectPath,
      sectionId, 
      projectColor,
      targetDate,
      isDateTime,
      completionDate,
      subTasks
   } = props;

   const [editor, showEditor] = useState(false);
   const pathname = `${window.location.pathname}/${id}`;
   const state = {
      id,
      content,
      priority,
      endDate,
      completionDate,
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

   if (editor) {
      return (
         <Editor
            currentContent={content}
            currentProjectId={projectId}
            currentSectionId={sectionId}
            currentTargetDate={targetDate}
            currentIsDateTime={isDateTime}
            currentProjectColor={projectColor}
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
         <Checkbox priority={priority} />
         <Link 
            to={{ pathname, state }}
            className="link"
         >
            {content}
         </Link>
         <Actions id={id} openEditor={toggleEditor} />
         {targetDate && <Date date={targetDate} />}
         {projectPath && projectName &&
            <ProjectLink
               name={projectName}
               path={projectPath}
            />
         }
      </StyledTask>
   )
}

Task.propTypes = {
   id: PropTypes.string.isRequired,
   content: PropTypes.string.isRequired,
   priority: PropTypes.number.isRequired,
   endDate: PropTypes.string,
   projectName: PropTypes.string,
   projectPath: PropTypes.string,
   projectColor: PropTypes.string,
   targetDate: PropTypes.number,
   isDateTime: PropTypes.bool.isRequired,
   completionDate: PropTypes.string,
   subTasks: PropTypes.array
}

export default Task
