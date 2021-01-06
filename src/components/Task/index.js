import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Actions from './Actions';
import Checkbox from '../shared/Checkbox';
import Date from './Date';
import Grip from '../shared/Grip';
import { Link } from 'react-router-dom';
import TaskModal from '../TaskModal';
import Overlay from '../shared/Overlay';

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
      top: 2px;
      left: -36px;
   }

   &:hover {
      .grip svg,.actions svg {
         color: grey;
      }
   }

   .arrow-icon {
      top: 5px;
      left: 6px;
   }
`

function Task({ id, projectId, content, priority, endDate, completionDate, subTasks, showModal }) {
   const history = useHistory();
   const closeModal = () => {
      history.push({ pathname: "/project/" + projectId })
   }

   return (
      <>
         <StyledTask>
            <Grip />
            <Checkbox priority={priority} />
            <Link to={`/project/${projectId}/${id}`} className="link">
               {content}
            </Link>
            <Date />
            <Actions className="actions" />
         </StyledTask>
         {showModal && <>
            <TaskModal
               key={id}
               id={id}
               projectId={projectId}
               content={content}
               priority={priority}
               endDate={endDate}
               completionDate={completionDate}
               subTasks={subTasks}
            />
            <Overlay show={true} hide={closeModal} />
         </>}
      </>
   )
}

Task.propTypes = {
   id: PropTypes.string.isRequired,
   content: PropTypes.string.isRequired,
   priority: PropTypes.number.isRequired,
   endDate: PropTypes.string,
   completionDate: PropTypes.string,
   subTasks: PropTypes.array,
   showModal: PropTypes.bool.isRequired
}

export default Task
