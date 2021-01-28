import React from 'react';
import { useSelector } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

import TaskModal from '../components/TaskModal';
import IconBtn from '../components/common/buttons/IconBtn';
import { ChatSquare, ThreeDots } from 'react-bootstrap-icons';
import SortSelector from '../components/common/selectors/SortSelector';
import Popover from '../components/common/Popover';
import SortWidget from '../components/common/SortWidget';
import ProjectSection from '../components/ProjectSection';

function Inbox({ match }) {
   const userId = useSelector(state => state.user.id);
   const inbox = useSelector(state => state.projects.find(project => project.id === userId)) || [];
   const sections = inbox.sections ? Object.values(inbox.sections).sort((a, b) => a.order - b.order) : [];

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

               <SortSelector
                  sortType={inbox.sortType}
                  projectId={inbox.id}
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
            {inbox && inbox.sortType !== 'order' && 
               <SortWidget
                  projectId={inbox.id}
                  sortType={inbox.sortType}
                  sortOrder={inbox.sortOrder}
               />
            }
            {sections.map((section, index) => 
               <ProjectSection
                  key={section.id}
                  name={section.name}
                  sectionId={section.id}
                  projectId={userId}
                  isOpen={section.isOpen}
                  order={section.order}
                  nextSiblingOrder={sections[index + 1] ? sections[index + 1].order : 0 }
               />
            )}
         </div>
      </>
   )
}

export default Inbox
