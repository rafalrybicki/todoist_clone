import React from 'react';
import styled from 'styled-components/macro';

import SuggestionsItem from './SuggestionsItem';
import { Calendar, BrightnessHigh, CalendarEvent, SkipForwardFill, SlashCircle, Laptop  } from 'react-bootstrap-icons';

const StyledSuggestions = styled.div`
   height: 170px;
   display: flex;
   flex-direction: column;
   color: #202020;
   border-bottom: 1px solid #ddd;

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

function Suggestions() {
   return (
      <StyledSuggestions>
         <SuggestionsItem text="Today">
            <Calendar size={15} color="rgb(5, 133, 39)" />
         </SuggestionsItem>
         {/* <SuggestionsItem text="Tommorow">
            <BrightnessHigh size={16} color="#ad6200" className="sun-icon" />
         </SuggestionsItem> */}
         <SuggestionsItem text="Later thiss week">
            <CalendarEvent size={15} color="#692fc2" />
         </SuggestionsItem>
         <SuggestionsItem text="This Weekend">
            <Laptop size={15} color="#246fe0" className="thisweekend-icon" />
         </SuggestionsItem>
         <SuggestionsItem text="Next week">
            <SkipForwardFill size={14} color="darkgreen" className="nextweek-icon" />
         </SuggestionsItem>
         <SuggestionsItem text="No date">
            <SlashCircle size={15} color="grey" className="nodate-icon" />
         </SuggestionsItem>
      </StyledSuggestions>
   )
}

export default Suggestions