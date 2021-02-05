import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import NewItemBtn from 'buttons/NewItemBtn';

const StyledSubtasks = styled.div`
   padding: 15px 28px;
   display: ${props => props.show ? 'block' : 'none'};
`

function Subtasks({ show }) {
   return (
      <StyledSubtasks show={show} >
         <NewItemBtn text="Add sub-task" />
      </StyledSubtasks>
   )
}

Subtasks.propTypes = {
   show: PropTypes.bool.isRequired
}

export default Subtasks
