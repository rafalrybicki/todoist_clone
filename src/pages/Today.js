import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { getDisplayDate, getBeginingOfTheDay, getEndOfTheDay } from '../utils';

import ProtectedRoute from './ProtectedRoute';
import TaskModal from '../components/TaskModal/TaskModal';
import Task from '../components/Task/Task';
import NewTask from '../components/NewTask';

const StyledToday = styled.div`
   .date {
      margin-left: 8px;
      padding-top: 5px;
      font-size: 11px;
      font-weight: 400;
      color: grey;
   }

   section {
      h2 {
         border-bottom: 1px solid #f0f0f0;
         padding-top: 10px;
         font-size: 14px;
      }

      .grip {
         display: none
      }
   }
`

function Today({ match }) {
   const date = getDisplayDate();
   const beginingOfTheDay = getBeginingOfTheDay();
   const endOfTheDay = getEndOfTheDay();
   const overdueTasks = useSelector(state => state.tasks.filter(task => task.targetDate && task.targetDate < beginingOfTheDay));
   const todayTasks = useSelector(state => state.tasks.filter(task => task.targetDate >= beginingOfTheDay && task.targetDate <= endOfTheDay));

   const userId = useSelector(state => state.user.id);

   return (
      <>
         <ProtectedRoute
            path={match.url + '/:taskId'}
            component={TaskModal}
         />
         <StyledToday className="view">
            <header>
               <h1>Today
                  <span className="date">{date}</span>
               </h1>
            </header>
            
            {overdueTasks.length > 0 &&
               <section>
                  <h2>Overude</h2>
                  {overdueTasks.map(task =>
                     <Task
                        key={task.id}
                        id={task.id}
                        projectId={task.projectId}
                        sectionId={task.sectionId}
                        content={task.content}
                        priority={task.priority}
                        targetDate={task.targetDate}
                        isDateTime={task.isDateTime}
                        completionDate={task.completionDate}
                        subTasks={task.subTasks}
                        showProjectLink={true}
                     />
                  )}
               </section>
            }

            <section>
               {overdueTasks.length > 0 && <h2>Today</h2>}
               {todayTasks.map(task =>
                  <Task
                     key={task.id}
                     id={task.id}
                     projectId={task.projectId}
                     sectionId={task.sectionId}
                     content={task.content}
                     priority={task.priority}
                     targetDate={task.targetDate}
                     isDateTime={task.isDateTime}
                     completionDate={task.completionDate}
                     subTasks={task.subTasks}
                     showProjectLink={true}
                  />
               )}
            </section>

            <NewTask
               sectionId="default"
               projectId={userId}
               date={beginingOfTheDay}
            />
         </StyledToday>
      </>
   )
}

export default Today
