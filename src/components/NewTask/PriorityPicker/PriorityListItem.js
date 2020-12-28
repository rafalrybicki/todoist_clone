import React from 'react';
import styled from 'styled-components';
import PriorityIcon from './PriorityIcon';

const StyledPriorityListItem = styled.li`
   position: relative;
   background-color: ${props => props.active ? '#f3f3f3' : 'transparent'};
   cursor: pointer;
   height: 32px;
   font-size: 13px;
   display: flex;
   align-items: center;
   transition: background-color .1s;

   svg {
      margin: 3px 12px 0;
   }

   &:hover {
      background-color: ${props => props.active ? '#ccc' : '#f3f3f3'};
   }

   .tick {
      position: absolute;
      top: 6px;
      right: 12px;
      display: inline-block;
      margin-left: auto;
      font-size: 16px;
   }
`

function PriorityListItem({ priority, onClick, active }) {
   return (
      <StyledPriorityListItem active={active} onClick={onClick}>
         <PriorityIcon priority={priority} />
         Priority {priority}
         {active && <span className="tick">&#10003;</span>}
      </StyledPriorityListItem>
   )
}

export default PriorityListItem
