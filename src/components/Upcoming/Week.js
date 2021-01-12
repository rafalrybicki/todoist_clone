import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import WeekDay from './WeekDay';
import { scrollToElement } from '../../utils';

const StyledWeek = styled.div`
   margin-top: 20px;
   width: 100%;
   height: 48px;
   display: flex;
   font-family: Arial, Helvetica, sans-serif;
`

function Week({ week, activeDay, initialMiliseconds }) {
   const setDay = (e) => {
      const miliseconds = e.currentTarget.dataset.value;
      
      scrollToElement(miliseconds, '#upcomingView');
   }

   return (
      <StyledWeek>
         <WeekDay
            text="Mon"
            dayNumber={week[0].day}
            miliseconds={week[0].miliseconds}
            active={week[0].day === activeDay}
            onClick={setDay}
            disabled={week[0].miliseconds < initialMiliseconds}
         />
         <WeekDay
            text="Thu"
            dayNumber={week[1].day}
            miliseconds={week[1].miliseconds}
            active={week[1].day === activeDay}
            onClick={setDay}
            disabled={week[1].miliseconds < initialMiliseconds}
         />
         <WeekDay
            text="Wed"
            dayNumber={week[2].day}
            miliseconds={week[2].miliseconds}
            active={week[2].day === activeDay}
            onClick={setDay}
            disabled={week[2].miliseconds < initialMiliseconds}
         />
         <WeekDay
            text="Thu"
            dayNumber={week[3].day}
            miliseconds={week[3].miliseconds}
            active={week[3].day === activeDay}
            onClick={setDay}
            disabled={week[3].miliseconds < initialMiliseconds}
         />
         <WeekDay
            text="Fri"
            dayNumber={week[4].day}
            miliseconds={week[4].miliseconds}
            active={week[4].day === activeDay}
            onClick={setDay}
            disabled={week[4].miliseconds < initialMiliseconds}
         />
         <WeekDay
            text="Sat"
            dayNumber={week[5].day}
            miliseconds={week[5].miliseconds}
            active={week[5].day === activeDay}
            onClick={setDay}
            disabled={week[5].miliseconds < initialMiliseconds}
         />
         <WeekDay
            text="Sun"
            dayNumber={week[6].day}
            miliseconds={week[6].miliseconds}
            active={week[6].day === activeDay}
            onClick={setDay}
            disabled={week[6].miliseconds < initialMiliseconds}
         />
      </StyledWeek>
   )
}

Week.propTypes = {
   week: PropTypes.arrayOf(PropTypes.object).isRequired,
   activeDay: PropTypes.number.isRequired,
   initialMiliseconds: PropTypes.number.isRequired
}

export default Week
