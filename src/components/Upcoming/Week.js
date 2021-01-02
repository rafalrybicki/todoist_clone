import React from 'react';
import styled from 'styled-components/macro';

import WeekDay from './WeekDay';

const StyledWeek = styled.div`
   margin-top: 17px;
   width: 100%;
   height: 48px;
   display: flex;
   font-family: Arial, Helvetica, sans-serif;
`

function Week() {
   return (
      <StyledWeek>
         <WeekDay number={28} text="Mon" disabled={true} />
         <WeekDay number={29} text="Thu" disabled={true} />
         <WeekDay number={30} text="Wed" disabled={true} />
         <WeekDay number={31} text="Thu" disabled={true} />
         <WeekDay number={1} text="Fri" active={true} />
         <WeekDay number={2} text="Sat" />
         <WeekDay number={3} text="Sun" />
      </StyledWeek>
   )
}

export default Week
