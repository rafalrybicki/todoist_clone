import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import { ChatSquare, ArrowDownUp, ThreeDots, PersonPlus } from 'react-bootstrap-icons';

import IconBtn from '../components/shared/IconBtn';
import Task from '../components/Task'
import TaskSection from '../components/shared/TaskSection';
import NewItemBtn from '../components/shared/NewItemBtn';
import NewSection from '../components/shared/NewSection';
import Popover from '../components/shared/Popover';
import SortList from '../components/shared/SortList';
import ViewSortOptions from '../components/shared/ViewSortOptions';
import { dynamicSort } from '../utils'

import { projects } from './data';

const StyledProject = styled.div`
   header button {
      margin-left: 10px;
   }

   .chat-icon {
      margin-top: 2px;
   }
`

function Project({ match }) {
   const projectId = match.params.projectId;
   const taskId = match.params.taskId;

   const [state, setState] = useState(projectId ? projects[projectId] : projects[0]);

   useEffect(() => {
      setState(projectId ? projects[projectId] : projects[0])
   }, [projectId])

   const changeSorting = (val) => {
      setState({ ...state, sortBy: val });
   }

   const reverseDirection = () => {
      const newDirection = state.sortDirection === 'up' ? 'down' : 'up';
      setState({ ...state, sortDirection: newDirection });
   }

   return (
      <StyledProject>
         <header>
            <h1>{state.name}</h1>
            <IconBtn tooltip="Comment" tooltipWidth="68px">
               <ChatSquare className="chat-icon" size="18"/>
            </IconBtn>

            {projectId && 
               <IconBtn tooltip="Share" tooltipWidth="44px">
                  <PersonPlus size="21"/>
               </IconBtn>
            } 

            <Popover 
               activator={
                  <IconBtn tooltip="Sort" tooltipWidth="36px">
                     <ArrowDownUp size="16"/>
                  </IconBtn>
               }
               content={
                  <SortList
                     sortBy={state.sortBy}
                     changeSorting={changeSorting}
                  />
               }
            />

            <Popover 
               activator={
                  <IconBtn tooltip="More project actions" tooltipWidth="125px">
                     <ThreeDots size="20"/>
                  </IconBtn>
               }
               content={
                  <ul>
                     <li>option</li>
                     <li>option 2</li>
                     <li>option 3</li>
                     {projectId && <li>project item</li>}
                  </ul>
               }
            />
         </header>
         {state.sortBy !== 'order' && 
            <ViewSortOptions
               sortBy={state.sortBy}
               sortDirection={state.sortDirection}
               reverseDirection={reverseDirection}
               resetSorting={() => changeSorting('order')}
            />
         }
         {state.tasks.sort(dynamicSort(state.sortBy, state.sortDirection)).map(task => (
            <Task
               key={task.id}
               id={task.id}
               projectId={task.projectId}
               content={task.content}
               priority={task.priority}
               endDate={task.endDate}
               completionDate={task.completionDate}
               subTasks={task.subTasks}
               showModal={taskId === task.id}
            />
         ))}

         <NewItemBtn text="Add task" onClick={() => alert('new task')} />
         <NewSection />
         <TaskSection name="ToDo section">
            <Task
               id="1das123234"
               content="hardcoded 2"
               priority={2}
               endDate=""
               completionDate=""
            />
            <Task
               id="1das1adsr234"
               content="hardcoded 4"
               priority={4}
               endDate=""
               completionDate=""
            />
            <Task
               id="1das12adq334"
               content="hardcoded 1"
               priority={1}
               endDate=""
               completionDate=""
            />
            <Task
               id="1das122w434"
               content="hardcoded 3"
               priority={3}
               endDate=""
               completionDate=""
            />
            <NewItemBtn text="Add task" onClick={() => alert('new task')} />
         </TaskSection>
         <NewSection />
      </StyledProject>
   )
}

export default Project
