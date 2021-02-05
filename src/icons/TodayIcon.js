import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { Calendar } from 'react-bootstrap-icons';

const StyledTodayIcon = styled.div`
   position: relative;
   color: #058527;
   height: ${props => props.size + 'px'};
   width: ${props => props.size + 'px'};

   .day {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 2px;
      height: ${props => props.size + 'px'};
      width: ${props => props.size + 'px'};
      line-height: 1;
      font-weight: bold;
      font-size: ${props => props.size === 16 ?  '10px' : '11.5px' };
      z-index: 100
   }
`

function TodayIcon({ size }) {
   const day = new Date().getDate();

   return (
      <StyledTodayIcon size={size} className="today-icon">
         <Calendar size={size} />
         <span className="day">
            {day}
         </span>
      </StyledTodayIcon> 
   )
}

TodayIcon.propTypes = {
   size: PropTypes.number.isRequired
}

export default TodayIcon
