import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Subtask from './Subtask';
import NewSubtask from './NewSubtask';

const StyledSubtasks = styled.div`
   padding: 15px 28px;
   display: ${props => props.show ? 'block' : 'none'};
`

function Subtasks({ show, subtasksObj, taskId, subtasksQuantity, completedSubtasksQuantity}) {
   const subtasks = Object.values(subtasksObj).sort((a, b) => a.order - b.order);

   return (
      <StyledSubtasks show={show}>
            {subtasks.map(subtask => 
               <Subtask
                  key={subtask.id}
                  id={subtask.id}
                  content={subtask.content}
                  completionDate={subtask.completionDate}
                  order={subtask.order}
                  taskId={taskId}
                  subtasksQuantity={subtasksQuantity}
                  completedSubtasksQuantity={completedSubtasksQuantity}
               />
            )}
         <NewSubtask taskId={taskId} />
      </StyledSubtasks>
   )
}

Subtasks.propTypes = {
   show: PropTypes.bool.isRequired,
   subtasksObj: PropTypes.object.isRequired,
   taskId: PropTypes.string.isRequired,
   subtasksQuantity: PropTypes.number.isRequired,
   completedSubtasksQuantity: PropTypes.number.isRequired
}

export default Subtasks
