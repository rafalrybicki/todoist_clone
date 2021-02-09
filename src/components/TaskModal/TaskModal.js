import React, { useState } from 'react';

import StyledTaskModal from './styled/TaskModal'; 
import ProjectLink from 'components/ProjectLink';
import Task from 'components/Task/Task';
import CloseBtn from 'buttons/CloseBtn';
import Tabs from './Tabs';
import Overlay from 'components/Overlay';
import Subtasks from './Subtasks';
import Comments from './Comments';
import Activity from './Activity';
import { useSelector } from 'react-redux';

function TaskModal({ location, match, history }) {
   const [activeTab, setActiveTab] = useState('subtasks');

   const task = useSelector(state => state.tasks.find(task => task.id === match.params.taskId));

   const close = () => {
      history.push(location.state.prevPath);
   }

   return (
      <>
         {task &&
            <StyledTaskModal>
               <ProjectLink
                  projectId={task.projectId}
               />
               <CloseBtn onClick={close} />
               <Task 
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  priority={task.priority}
                  order={task.order}
                  targetDate={task.targetDate}
                  isDateTime={task.isDateTime}
                  completionDate={task.completionDate}
                  projectId={task.projectId}
                  sectionId={task.sectionId}
                  ownerId={task.ownerId}
                  subTasks={task.subTasks}
                  modal
               />
               <Tabs
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
               />
               <Subtasks show={activeTab === 'subtasks'} />
               <Comments show={activeTab === 'comments'} />
               <Activity show={activeTab === 'activity'} />
            </StyledTaskModal>
         }
         <Overlay show={true} hide={close} />
      </>
   )
}

export default TaskModal
