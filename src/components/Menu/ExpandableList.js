import React, { useState} from 'react';
import styled from 'styled-components';

import Icon from '../shared/Icon'

const StyledExpandableList = styled.div`
   display: flex;
   align-items: center;
   flex-direction: row;
   flex-wrap: wrap;
   height: ${props => props.open ? 'auto' : '34px'};
   overflow-y: hidden;
   
   button:nth-of-type(1) {
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

   button:nth-of-type(2) {
      display: flex;
      align-items: center;
      visibility: hidden;
   }

   &:hover button:nth-of-type(2) {
      visibility: visible;
   }

   button:nth-of-type(2) svg{
      fill: black;
   }

   .chevron {
      margin-left: 6.5px;
      margin-right: 13.5px;
      height: 16px;
      width: 16px;
      transition: transform 0.1s;
      transform: ${props => props.open ? 'rotate(0)' : 'rotate(90deg)' };
   }
`

function ExpandableList({ text, children }) {
   const [open, setOpen] = useState(false);

   return (
      <StyledExpandableList open={open}>
         <button onClick={() => setOpen(!open)}>
            <div className="chevron">
               <Icon icon="chevron" />
            </div>
            {text}
         </button>
         <button>
            <Icon icon="plus" />
         </button>
         <ul>{children}</ul>
      </StyledExpandableList>
   )
}

export default ExpandableList
