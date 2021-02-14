import React from 'react';
import PropTypes from 'prop-types';

import { getDate, getNextWeek, getWeek } from 'utils';

import StyledDateSuggestions from './styled/DateSuggestions';
import SuggestionsItem from './DateSuggestionsItem';
import TodayIcon from 'icons/TodayIcon';
import TommorowIcon from 'icons/TomorrowIcon';
import ThisWeekendIcon from 'icons/ThisWeekendIcon';
import NextWeekIcon from 'icons/NextWeekIcon';
import NoDateIcon from 'icons/NoDateIcon';

function DateSuggestions({ currentDate, setMiliseconds, resetDate, closeSelector }) {
   const today = getDate().miliseconds;
   const tommorow = today + 86400000;
   const thisWeek = getWeek(today)
   const nextWeek = getNextWeek(today);
   const thisWeekend = thisWeek[5].miliseconds;
   const nextWeekend = nextWeek[5].miliseconds;
   const nextMonday = nextWeek[0].miliseconds;

   return (
      <StyledDateSuggestions
         onClick={closeSelector}
      >
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
      </StyledDateSuggestions>
   )
}

DateSuggestions.propTypes = {
   currentDate: PropTypes.number,
   setMiliseconds: PropTypes.func.isRequired,
   resetDate: PropTypes.func.isRequired,
   closeSelector: PropTypes.func.isRequired,
}

export default DateSuggestions
