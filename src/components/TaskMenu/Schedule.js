import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import TodayBtn from '../common/buttons/TodayBtn';
import TomorrowBtn from '../common/buttons/TomorrowBtn';
import ThisWeekendBtn from '../common/buttons/ThisWeekendBtn';
import NextWeekBtn from '../common/buttons/NextWeekBtn';
import NoDateBtn from '../common/buttons/NoDateBtn';
import MoreOptionsBtn from '../common/buttons/MoreOptionsBtn';

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
