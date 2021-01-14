import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import { scrollToElement } from '../../utils';

const StyledWeekControls = styled.div`
   display: flex;
   position: absolute;
   top: 41px;
   right: 0;

   button {
      border: 1px solid #ccc;
      border-radius: 5px;
      height: 28px;
      min-width: 28px;
   }

   .prev {
      border-right: 0.5px solid #eeeeee;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
   }

   .next {
      border-left: 0.5px solid #eeeeee;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
   }

   button:last-of-type {
      color: #555;
      padding: 0 8px;
      margin-left: 10px;
   }

   button:last-of-type:hover {
      background-color: #eee
   }
`

function WeekControls({ mondayMiliseconds, sundayMilisecons, reset, disabledPrev }) { 
   const viewId = '#upcomingView'

   const prevWeek = () => {
      const miliseconds = (mondayMiliseconds - (7 * 86400000));
      scrollToElement(miliseconds, viewId);
   }

   const nextWeek = () => {
      const miliseconds = sundayMilisecons + 86400000;
      scrollToElement(miliseconds, viewId);
   }

   return (
      <StyledWeekControls>
         <button
            onClick={prevWeek}
            className="prev"
            disabled={disabledPrev}
         >
            <ChevronLeft />
         </button>
         <button
            onClick={nextWeek}
            className="next">
            <ChevronRight />
         </button>
         <button
            onClick={reset}
         >Today</button>
      </StyledWeekControls>
   )
}

WeekControls.propTypes = {
   mondayMiliseconds: PropTypes.number.isRequired,
   sundayMilisecons: PropTypes.number.isRequired,
   reset: PropTypes.func.isRequired,
   disabledPrev: PropTypes.bool.isRequired
}

export default WeekControls
