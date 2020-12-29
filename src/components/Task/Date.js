import React from 'react';
import styled from 'styled-components/macro';

import { CalendarEvent } from 'react-bootstrap-icons';

const StyledDate = styled.span`
   font-size: 12px;
   color: blue;
   height: 16px;

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
