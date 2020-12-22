import React, { useState} from 'react';
import styled from 'styled-components';

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
      margin-left: 32px;
   }

   button:nth-of-type(2) {
      display: flex;
      align-items: center;
      visibility: hidden;
   }

   &:hover button:nth-of-type(2) {
      visibility: visible;
   }

   .chevron {
      margin-left: 8px;
      margin-right: 13px;
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
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
               </svg>
            </div>
            {text}
         </button>
         <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" viewBox="0 0 16 16">
               <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
         </button>
         <ul >{children}</ul>
      </StyledExpandableList>
   )
}

export default ExpandableList
