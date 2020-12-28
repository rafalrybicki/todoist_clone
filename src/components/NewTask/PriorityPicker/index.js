import React, { useState } from 'react';
import styled from 'styled-components';

import IconBtn from '../../shared/IconBtn';
import PriorityIcon from './PriorityIcon';
import PriorityList from './PriorityList';
import PriorityListItem from './PriorityListItem';

const StyledPriorityPicker = styled.div`
   position: relative;
`

function PriorityPicker({ currentPriority }) {
   const [priority, setPriority] = useState(currentPriority);
   const [showPriorityList, togglePriorityList] = useState(false);

   const priorities = [1,2,3,4];

   const onPriorityChange = (priority) => {
      setPriority(priority);
      togglePriorityList(false);
   }

   return (
      <StyledPriorityPicker>
         <IconBtn
            hoverColor="#eee"
            height="28px"
            width="28px"
            onClick={() => togglePriorityList(!showPriorityList)}
         >
            <PriorityIcon priority={priority} />
         </IconBtn>
         <PriorityList show={showPriorityList}>
            {priorities.map(priorityItem => 
               <PriorityListItem
                  key={priorityItem}
                  priority={priorityItem}
                  onClick={() => onPriorityChange(priorityItem)}
                  active={priorityItem === priority}
               />
            )}
         </PriorityList>   
      </StyledPriorityPicker>
   )
}

export default PriorityPicker
