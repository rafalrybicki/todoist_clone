import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { updateDocument } from '../../firebase';

import Editor from '../Editor';
import Popover from '../common/Popover';
import OptionsBtn from '../common/buttons/OptionsBtn';
import TaskMenu from './TaskMenu';
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

   .popover {
      position: absolute;
      top: 10px;
      right: 0;

      > .options-btn {
         color: transparent;
      }

      .arrow-icon {
         top: 4px;
         left: 8px;
      }
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

   &:hover {
      .popover >.options-btn {
         color: grey
      }
   }
`

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
      showProjectLink
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

   console.log(showProjectLink)

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
         
         <Popover 
            activator={
               <OptionsBtn />
            }
            content={
               <TaskMenu
                  {...props}
                  edit={toggleEditor}
               />
            }
         />
         
         {targetDate && <Date date={targetDate} />}
         
         {showProjectLink &&
            <ProjectLink
               name="project name"
               path="/inbox"
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
   completionDate: PropTypes.string,
   projectId: PropTypes.string.isRequired,
   sectionId: PropTypes.string.isRequired,
   ownerId: PropTypes.string.isRequired,
   subTasks: PropTypes.array.isRequired,
   showProjectLink: PropTypes.bool
}

export default Task
