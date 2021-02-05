import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { getDate, getNextWeek, getWeek } from 'utils';

import SuggestionsItem from './SuggestionsItem';
import TodayIcon from 'components/appIcons/TodayIcon';
import TommorowIcon from 'components/appIcons/TomorrowIcon';
import ThisWeekendIcon from 'components/appIcons/ThisWeekendIcon';
import NextWeekIcon from 'components/appIcons/NextWeekIcon';
import NoDateIcon from 'components/appIcons/NoDateIcon';

const StyledSuggestions = styled.div`
   height: auto;
   display: flex;
   flex-direction: column;
   color: #202020;
   border-bottom: 1px solid #ddd;

   .today-icon {
      position: absolute;
      top: 9px;
      left: 12px;
   }

   .next-week-icon {
      margin-top: 1px;
      margin-left: 1px;
   }

   .this-weekend-icon {
      margin-top: -1px;
   }
`

function Suggestions({ currentDate, setMiliseconds, resetDate }) {
   const today = getDate().miliseconds;
   const tommorow = today + 86400000;
   const thisWeek = getWeek(today)
   const nextWeek = getNextWeek(today);
   const thisWeekend = thisWeek[5].miliseconds;
   const nextWeekend = nextWeek[5].miliseconds;
   const nextMonday = nextWeek[0].miliseconds;

   return (
      <StyledSuggestions>
         {currentDate !== today &&
            <SuggestionsItem
               text="Today"
               miliseconds={today}
               onClick={() => setMiliseconds(today)}
            >
               <TodayIcon size={16} />
            </SuggestionsItem>
         }

         {currentDate !== tommorow &&
            <SuggestionsItem
               text="Tommorow"
               miliseconds={tommorow}
               onClick={() => setMiliseconds(tommorow)}
            >
               <TommorowIcon size={17} />
            </SuggestionsItem>
         }  

         <SuggestionsItem
            text={today >= thisWeekend ? "Next weekend" : "This weekend"}
            miliseconds={today >= thisWeekend ? nextWeekend : thisWeekend}
            onClick={() => setMiliseconds(today >= thisWeekend ? nextWeekend : thisWeekend)}
         >
            <ThisWeekendIcon size={16} />
         </SuggestionsItem>

         {nextMonday !== tommorow &&
            <SuggestionsItem
               text="Next week"
               miliseconds={nextWeek[0].miliseconds}
            >
               <NextWeekIcon size={14} />
            </SuggestionsItem>
         }

         {currentDate && 
            <SuggestionsItem
               text="No date"
               miliseconds={null}
               onClick={resetDate}
            >
               <NoDateIcon size={15} />
            </SuggestionsItem>
         }
      </StyledSuggestions>
   )
}

Suggestions.propTypes = {
   currentDate: PropTypes.number,
   setMiliseconds: PropTypes.func.isRequired,
   resetDate: PropTypes.func.isRequired,
}

export default Suggestions
