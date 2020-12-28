import React from 'react';
import styled from 'styled-components';

import { CalendarEvent } from 'react-bootstrap-icons';

const StyledDate = styled.span`
   font-size: 12px;
   color: blue;

   svg {
      margin-right: 3px;
   }
`

function Date() {
   return (
      <StyledDate>
         <CalendarEvent size={10} />
         Monday
      </StyledDate>
   )
}

export default Date
