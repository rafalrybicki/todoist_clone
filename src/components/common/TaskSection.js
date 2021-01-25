import React, { useState } from 'react';
import styled from 'styled-components/macro';

import Grip from './Grip';
import IconBtn from './buttons/IconBtn';
import ChevronIcon from './icons/ChevronIcon';
import { ThreeDots } from 'react-bootstrap-icons';
import Task from '../Task';
import NewItemBtn from './buttons/NewItemBtn';
import Editor from '../Editor';

import { db } from '../../firebase';
import useFirestoreCollection from '../../hooks/useFirestoreCollection'

const StyledTaskSection = styled.div`
   position: relative;
   padding: 20px 0 10px;
   width: 100%;

   h2{
      font-size: 14px;
      margin: 0 5px 5px 0;
      padding-bottom: 6px;
      border-bottom: 1px solid #f0f0f0;
   }

   /* > ul {
      margin-top: 5px;
      padding-top: 5px;
      border-top: 1px solid #f0f0f0;
      width: 100%;
      height: ${props => props.showList ? 'auto' : '0'};
      transition: height .2s;
      overflow: hidden;
   } */

   > .grip {
      top: 18px;
      left: -60px;
   }

   > .chevron {
      position: absolute !important;
      top: 18px;
      left: -30px;

      svg {
         color: grey;
      }
   }

   > .chevron:hover {
      svg {
         color: #202020
      }
   }

   &:hover {
      > .grip {
         color: grey;
      }
   }

   .more {
      position: absolute;
      top: 18px;
      right: 0
   }
`

function TaskSection({ name, sectionId, projectId, userId }) {
   const tasks = useFirestoreCollection('tasks', 'sectionId', '==', sectionId);
   const [showList, toggleSectionList] = useState(true);
   const [editor, toggleEditor] = useState(false);

   const addNewTask = (obj) => {
      let newTask = {
         projectId,
         sectionId,
         ownerId: userId,
         priority: 4,
         targetDate: null,
         completionDate: null,
         subTasks: [],
         comments: [],
         activity: []
      }

      const newTaskRef = db.collection('tasks').doc();
      const id = newTaskRef.id

      newTask = {
         id,
         ...newTask,
         ...obj
      }
      
      newTaskRef.set(newTask);
   }

   return (
      <StyledTaskSection showList={showList}>
         <Grip />
         <IconBtn
            hoverColor="#eee"
            width="28px"
            onClick={() => toggleSectionList(!showList)}
            className="chevron"
         >
            <ChevronIcon rotate={showList.toString()} />
         </IconBtn>
         <h2>{name}</h2>
         <IconBtn
            hoverColor="#eee"
            width="28px"
            tooltip="More section actions"
            tooltipWidth="112px"
            className="more"
         >
            <ThreeDots size="20"/>
         </IconBtn>
         {tasks.map( task => 
            <Task
               key={task.id}
               id={task.id}
               projectId={task.projectId}
               sectionId={task.sectionId}
               content={task.content}
               priority={task.priority}
               targetDate={task.targetDate}
               completionDate={task.completionDate}
               subTasks={task.subTasks}
            />
         )}
         {!editor && 
            <NewItemBtn
               text="Add task"
               onClick={() => toggleEditor(true)}
            />
         }
         {editor &&
            <Editor
               currentProjectId={projectId}
               currentSectionId={sectionId}
               onSave={addNewTask}
               onClose={() => toggleEditor(false)}
               isTask
            />
         }
      </StyledTaskSection>
   )
}

export default TaskSection
