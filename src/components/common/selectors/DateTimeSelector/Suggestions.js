import React from 'react';
import styled from 'styled-components/macro';

import SuggestionsItem from './SuggestionsItem';
import TodayIcon from '../../icons/TodayIcon';
import { BrightnessHigh, CalendarEvent, SkipForwardFill, SlashCircle, Laptop  } from 'react-bootstrap-icons';
import { getDate } from '../../../../utils';

const StyledSuggestions = styled.div`
   height: 170px;
   display: flex;
   flex-direction: column;
   color: #202020;
   border-bottom: 1px solid #ddd;

   .today-icon {
      position: absolute;
      top: 9px;
      left: 11px;
   }

   .sun-icon, .nodate-icon {
      margin-left: -1px;
   }

   .nextweek-icon {
      margin-top: 1px;
   }

   .thisweekend-icon {
      margin-top: -1px;
   }
`

function Suggestions({ currentDate, setDate }) {
   const today = getDate().miliseconds;
   const tommorow = today + 86400000
   return (
      <StyledSuggestions>
         {currentDate !== today &&
            <SuggestionsItem text="Today" onClick={() => setDate(today)}>
               <TodayIcon size={16} />
            </SuggestionsItem>
         }
         {currentDate !== tommorow &&
            <SuggestionsItem text="Tommorow" onClick={() => setDate(tommorow)}>
               <BrightnessHigh size={16} color="#ad6200" className="sun-icon" />
            </SuggestionsItem>
         }       
         <SuggestionsItem text="Later thiss week">
            <CalendarEvent size={15} color="#692fc2" />
         </SuggestionsItem>
         <SuggestionsItem text="This Weekend">
            <Laptop size={15} color="#246fe0" className="thisweekend-icon" />
         </SuggestionsItem>
         <SuggestionsItem text="Next week">
            <SkipForwardFill size={14} color="darkgreen" className="nextweek-icon" />
         </SuggestionsItem>
         <SuggestionsItem text="No date" onClick={() => setDate(null)}>
            <SlashCircle size={15} color="grey" className="nodate-icon" />
         </SuggestionsItem>
      </StyledSuggestions>
   )
}

export default Suggestions
