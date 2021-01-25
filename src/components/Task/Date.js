import React from 'react';
import styled from 'styled-components/macro';

import { CalendarEvent } from 'react-bootstrap-icons';
import { getTaskDate } from '../../utils';

const StyledDate = styled.span`
   position: absolute;
   bottom: 6px;
   left: 27px;
   font-size: 12px;
   color: grey;
   height: 16px;

   svg {
      margin-right: 3px;
   }
`

function Date({ date }) {
   return (
      <StyledDate>
         <CalendarEvent size={10} />
         {getTaskDate(date)}
      </StyledDate>
   )
}

export default Date
