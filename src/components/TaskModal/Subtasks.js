import React from 'react';
import styled from 'styled-components';

import NewItemBtn from '../shared/buttons/NewItemBtn';

const StyledSubtasks = styled.div`
   padding: 15px 28px;
`

function Subtasks() {
   return (
      <StyledSubtasks>
         <NewItemBtn text="Add sub-task" />
      </StyledSubtasks>
   )
}

export default Subtasks
