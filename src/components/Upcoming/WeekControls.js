import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import IconBtn from '../shared/IconBtn';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';

const StyledWeekControls = styled.div`
   display: flex;
   position: absolute;
   top: 36px;
   right: 55px;

   button {
      border: 1px solid #ccc;
      border-radius: 5px;
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

function WeekControls() {
   return (
      <StyledWeekControls>
         <IconBtn width="28px" cssClass="prev">
            <ChevronLeft />
         </IconBtn>
         <IconBtn width="28px" cssClass="next">
            <ChevronRight />
         </IconBtn >
         <button>Today</button>
      </StyledWeekControls>
   )
}

export default WeekControls
