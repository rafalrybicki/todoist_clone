import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { getDate, getNextWeek, getWeek } from '../../../../utils';

import SuggestionsItem from './SuggestionsItem';
import TodayIcon from '../../icons/TodayIcon';
import { BrightnessHigh, SkipForwardFill, SlashCircle, HouseDoorFill  } from 'react-bootstrap-icons';

const StyledSuggestions = styled.div`
   height: auto;
   display: flex;
   flex-direction: column;
   color: #202020;
   border-bottom: 1px solid #ddd;

   .today-icon {
      position: absolute;
      top: 9px;
      left: 11px;
   }

   .tommorow-icon {
      margin-left: -1px;
   }

   .nextweek-icon {
      margin-top: 1px;
      margin-left: 1px;
   }

   .weekend-icon {
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
               <BrightnessHigh
                  size={16}
                  color="#ad6200"
                  className="tommorow-icon"
               />
            </SuggestionsItem>
         }       
         <SuggestionsItem
            text={today > thisWeekend ? "Next weekend" : "This weekend"}
            miliseconds={today > thisWeekend ? nextWeekend : thisWeekend}
            onClick={today > thisWeekend ?  () => setMiliseconds(nextWeekend) : () => setMiliseconds(thisWeekend) }
         >
            <HouseDoorFill
               size={15}
               color="#246fe0"
               className="weekend-icon"
            />
         </SuggestionsItem>
         {nextMonday !== tommorow &&
            <SuggestionsItem
               text="Next week"
               miliseconds={nextWeek[0].miliseconds}
            >
               <SkipForwardFill
                  size={14}
                  color="darkgreen"
                  className="nextweek-icon"
               />
            </SuggestionsItem>
         }
         {currentDate && 
            <SuggestionsItem
               text="No date"
               miliseconds={null}
               onClick={resetDate}
            >
               <SlashCircle
                  size={15}
                  color="grey"
                  className="nodate-icon"
               />
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
