import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { getDisplayDate } from 'utils';
import NewItemBtn from 'buttons/NewItemBtn';

const StyledDay = styled.div`
   padding-top: 28px;

   h2 {
      font-size: 14px;
      border-bottom: 1px solid black;
      font-family: Arial, Helvetica, sans-serif;
      padding-bottom: 5px;
      border-bottom: 1px solid #f0f0f0;
   }
`

function Day({ miliseconds, tasks }) {
   return (
      <StyledDay id={miliseconds} className="day">
         <h2>{getDisplayDate(miliseconds)}</h2>
         <NewItemBtn text="Add task" />
      </StyledDay>
   )
}

Day.propTypes = {
   miliseconds: PropTypes.number.isRequired,
   tasks: PropTypes.arrayOf(PropTypes.element)
}

export default Day
