import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import TodayBtn from '../appButtons/TodayBtn';
import TomorrowBtn from '../appButtons/TomorrowBtn';
import ThisWeekendBtn from '../appButtons/ThisWeekendBtn';
import NextWeekBtn from '../appButtons/NextWeekBtn';
import NoDateBtn from '../appButtons/NoDateBtn';
import OptionsBtn from '../appButtons/OptionsBtn';

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
         <OptionsBtn />
      </StyledSchedule>
   )
}

Schedule.porpTypes = {
   id: PropTypes.number.isRequired
}

export default Schedule
