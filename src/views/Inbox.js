import React, { useState, useEffect } from 'react';

import IconBtn from '../components/common/buttons/IconBtn';
import { ChatSquare, ArrowDownUp, ThreeDots } from 'react-bootstrap-icons';
import { dynamicSort } from '../utils';
import Task from '../components/Task'
import TaskSection from '../components/common/TaskSection';
import NewItemBtn from '../components/common/buttons/NewItemBtn';
import NewSection from '../components/common//NewSection';
import Popover from '../components/common/Popover';
import SortList from '../components/common/SortList';
import SortWidget from './SortWidget';
import Modal from '../components/TaskModal';
import Editor from '../components/Editor';
import { auth, db } from '../firebase';
import useNotSectionedTasks from '../hooks/useNotSectionedTasks';
import ProtectedRoute from './ProtectedRoute';


function useFirestoreDocument(path) {
   const [document, setDocument] = useState({});

   useEffect(() => {
      const collection = db.doc(path)
         .onSnapshot(function(snapshot) {
            setDocument(snapshot.data())
         });

      return () => collection();
   }, [])

   return document
}

function Inbox({ match }) {
   const userId = auth.currentUser.uid;
   const [editor, showEditor] = useState(false);
   const defaultSection = useNotSectionedTasks(userId);
   const inbox = useFirestoreDocument('projects/' + userId);
   const sections = inbox && inbox.sections ? Object.values(inbox.sections) : [];

   const addNewTask = (obj) => {
      let newTask = {
         projectId: userId,
         sectionId: null,
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

   const toggleEditor = () => {
      showEditor(editor => !editor);
   }

   return (
      <>
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
            {defaultSection.map( task => 
               <Task
                  key={task.id}
                  id={task.id}
                  projectId={task.projectId}
                  sectionId={task.sectionId}
                  content={task.content}
                  priority={task.priority}
                  targetDate={task.targetDate}
                  targetDateTime={task.targetDateTime}
                  completionDate={task.completionDate}
                  subTasks={task.subTasks}
               />
            )}
            {!editor && <NewItemBtn text="Add task" onClick={toggleEditor} />}
            {editor && 
               <Editor
                  currentProjectId={userId}
                  onSave={addNewTask}
                  onClose={toggleEditor}
                  isTask 
               />
            }
            <NewSection projectId={userId} />
            {sections.map(section => 
               <TaskSection
                  key={section.id}
                  sectionId={section.id}
                  projectId={userId}
                  userId={userId}
                  name={section.name}
               />
            )}
         </div>
         <ProtectedRoute path={match.url + '/:taskId'} component={Modal} />
      </>
   )
}

export default Inbox
