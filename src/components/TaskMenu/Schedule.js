import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import TodayBtn from '../shared/buttons/TodayBtn';
import TomorrowBtn from '../shared/buttons/TomorrowBtn';
import ThisWeekendBtn from '../shared/buttons/ThisWeekendBtn';
import NextWeekBtn from '../shared/buttons/NextWeekBtn';
import NoDateBtn from '../shared/buttons/NoDateBtn';
import MoreOptionsBtn from '../shared/buttons/MoreOptionsBtn';

const StyledSchedule = styled.div`
   button {
      width: 28px;
      height: 28px;
   }
`

function Schedule({ id }) {
   return (
      <StyledSchedule>
         <TodayBtn />
         <TomorrowBtn />
         <ThisWeekendBtn />
         <NextWeekBtn />
         <NoDateBtn />
         <MoreOptionsBtn />
      </StyledSchedule>
   )
}

Schedule.porpTypes = {
   id: PropTypes.number.isRequired
}

export default Schedule
