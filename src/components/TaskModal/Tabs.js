import React from 'react';
import styled from 'styled-components/macro';

const StyledModalTabs = styled.div`
   margin-top: 10px;
   display: flex;
   
   button {
      flex-grow: 1;
      font-family: Arial, Helvetica, sans-serif;
      height: 32px;
      border: 0;
      border-radius: 0;
      color: grey;
      border-bottom: 1px solid #e0e0e0;
   }

   button.active {
      color: #202020;
      border-bottom: 1px solid #202020;
      font-weight: bold;
   }
`

function Tabs() {
   return (
      <StyledModalTabs>
         <button className="active">Sub-tasks</button>
         <button>Comments</button>
         <button>Activity</button>
      </StyledModalTabs>
   )
}

export default Tabs
