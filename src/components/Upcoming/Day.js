import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { getDisplayDate } from '../../helpers';
import Task from '../Task';
import NewItemBtn from '../shared/NewItemBtn';

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

function Day({ date }) {
   return (
      <StyledDay>
         <h2>{getDisplayDate(date)}</h2>
         <Task priority="1" />
         <Task priority="2" />
         <Task priority="3" />
         <Task priority="4" />
         <NewItemBtn text="Add task" />
      </StyledDay>
   )
}

Day.propTypes = {
   date: PropTypes.string.isRequired
}

export default Day
