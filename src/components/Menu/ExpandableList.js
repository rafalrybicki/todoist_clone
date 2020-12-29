import React, { useState} from 'react';
import styled from 'styled-components';

import { Plus } from 'react-bootstrap-icons';
import ChevronIcon from '../shared/ChevronIcon';

const StyledExpandableList = styled.div`
   display: flex;
   align-items: center;
   flex-direction: row;
   flex-wrap: wrap;
   height: ${props => props.open ? 'auto' : '34px'};
   overflow-y: hidden;
   
   > button:nth-of-type(1) {
      font-size: 14px;
      color: #333;
      font-weight: 700;
      display: flex;
      align-items: center;
      font-size: 14px;
      height: 34px;
      width: 211px;
      margin-left: 5px
   }

   > button:nth-of-type(2) {
      display: flex;
      align-items: center;
      visibility: hidden;
   }

   > &:hover button:nth-of-type(2) {
      visibility: visible;
   }

   .chevron-icon {
      margin-left: 6px;
      margin-right: 14px;
   }

   ul {
      width: 100%;
   }
`

function ExpandableList({ text, children }) {
   const [open, setOpen] = useState(false);

   return (
      <StyledExpandableList open={open}>
         <button onClick={() => setOpen(!open)}>
            <ChevronIcon rotate={open.toString()} />
            {text}
         </button>
         <button>
            <Plus size={24} />
         </button>
         <ul>{children}</ul>
      </StyledExpandableList>
   )
}

export default ExpandableList
