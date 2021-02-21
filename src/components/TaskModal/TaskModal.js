import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import StyledTaskModal from './styled/TaskModal'; 
import ProjectLink from 'components/ProjectLink';
import Task from 'components/Task/Task';
import CloseBtn from 'buttons/CloseBtn';
import Tabs from './Tabs';
import Overlay from 'components/Overlay';
import Subtasks from './Subtasks';
import Comments from './Comments';
import Activity from './Activity';

function TaskModal({ match, history }) {
   const [activeTab, setActiveTab] = useState('subtasks');

   const task = useSelector(state => state.tasks.find(task => task.id === match.params.taskId));

   const close = () => {
      if (match.path.includes('inbox')) {
         history.push('/inbox');
      } else if (match.path.includes('today')) {
         history.push('/today');
      } else {
         history.push('/project/' + task.projectId);
      }
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
                  subtasks={task.subtasks}
                  subtasksQuantity={task.subtasksQuantity}
                  completedSubtasksQuantity={task.completedSubtasksQuantity}
                  modal
               />
               <Tabs
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
               />
               <Subtasks
                  show={activeTab === 'subtasks'}
                  subtasksObj={task.subtasks}
                  taskId={task.id}
                  subtasksQuantity={task.subtasksQuantity}
                  completedSubtasksQuantity={task.completedSubtasksQuantity}
               />
               <Comments show={activeTab === 'comments'} />
               <Activity show={activeTab === 'activity'} />
            </StyledTaskModal>
         }
         <Overlay show={true} hide={close} zIndex={100} />
      </>
   )
}

export default TaskModal
