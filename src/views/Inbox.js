import React from 'react';
import { useSelector } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

import TaskModal from '../components/TaskModal';
import IconBtn from '../components/common/buttons/IconBtn';
import { ChatSquare, ArrowDownUp, ThreeDots } from 'react-bootstrap-icons';
import Popover from '../components/common/Popover';
import SortList from '../components/common/SortList';
import SortWidget from './SortWidget';
import ProjectSection from '../components/common/ProjectSection';

function Inbox({ match }) {
   const userId = useSelector(state => state.user.id);
   const inbox = useSelector(state => state.projects.find(project => project.id === userId)) || [];

   return (
      <>
         <ProtectedRoute
            path={match.url + '/:taskId'}
            component={TaskModal}
         />
         <div className="view">
            <header>
               <h1>Inbox</h1>
               <IconBtn tooltip="Comments" tooltipWidth="68px">
                  <ChatSquare className="chat-icon" size="18"/>
               </IconBtn>

               <Popover 
                  activator={
                     <IconBtn tooltip="Sort" tooltipWidth="36px">
                        <ArrowDownUp size="16"/>
                     </IconBtn>
                  }
                  content={
                     <SortList
                        sortBy={'priority'}
                        changeSorting={() => console.log('change sorting')}
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
                     </ul>
                  }
               />
            </header>
            <SortWidget
               projectId={inbox.id}
               sortType={inbox.sortType}
               sortDirection={inbox.sortDirection}
            />
            {inbox.sections.map(section => 
               <ProjectSection
                  key={section.id}
                  sectionId={section.id}
                  projectId={userId}
                  userId={userId}
                  name={section.name}
               />
            )}
         </div>
      </>
   )
}

export default Inbox
