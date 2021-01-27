import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import Editor from '../Editor';
import Grip from './Grip';
import IconBtn from './buttons/IconBtn';
import ChevronIcon from './icons/ChevronIcon';
import { ThreeDots } from 'react-bootstrap-icons';
import Task from '../Task';
import NewTask from './NewTask';

const StyledProjectSection = styled.section`
   position: relative;
   width: 100%;
   padding-bottom: 20px;

   header {
      display: flex;
      border-bottom: 1px solid #f0f0f0;

      .grip {
         top: -2px;
         left: -60px;

         &:hover {
            background-color: #eee;
         }
      }
      
      .chevron {
         position: absolute;
         top: -2px;
         left: -32px;

         svg {
            color: grey;
         }

         &:hover {
            svg {
               color: #202020
            }
         }
      }

      h2{
         font-size: 14px;
         margin: 0 5px 5px 0;
         flex-grow: 1;
      }

      &:hover {
         .grip {
            color: grey;
         }
      }
   }
`

function ProjectSection({ name, sectionId, projectId, isOpen }) {
   const tasks = useSelector(state => state.tasks.filter(task => task.projectId === projectId && task.sectionId === sectionId));
   const [openEditor, setOpenEditor] = useState(false);

   const editSection = (newName) => alert('change name from ' + name + ' to ' + newName) 

   const toggleSectionOpening = () => alert('open section')

   return (
      <StyledProjectSection isOpen={isOpen}>
         {openEditor &&
            <Editor
               currentContent={name}
               onSave={editSection}
               onClose={() => setOpenEditor(false)}
            />
         }

         {sectionId !== 'default' && openEditor === false &&
            <header>
               <Grip />
               <IconBtn
                  hoverColor="#eee"
                  width="28px"
                  onClick={toggleSectionOpening}
                  className="chevron"
               >
                  <ChevronIcon rotate={isOpen} />
               </IconBtn>
               <h2>{name}</h2>
               <IconBtn
                  hoverColor="#eee"
                  width="28px"
                  tooltip="More section actions"
                  tooltipWidth="112px"
                  onClick={() => setOpenEditor(true)}
                  className="more"
               >
                  <ThreeDots size="20"/>
               </IconBtn>
            </header>
         }

         {tasks.map( task => 
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

         <NewTask
            sectionId={sectionId}
            projectId={projectId}
         />
      </StyledProjectSection>
   )
}

ProjectSection.propTypes = {
   name: PropTypes.string.isRequired,
   sectionId: PropTypes.string.isRequired,
   projectId: PropTypes.string.isRequired,
   isOpen: PropTypes.bool.isRequired
}

export default ProjectSection