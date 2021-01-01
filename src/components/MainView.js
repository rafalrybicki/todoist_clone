import React from 'react';
import styled from 'styled-components/macro';

const StyledMainView = styled.main`
   padding: 36px 55px;
   flex-grow: 1;

   > div {
      margin: 0 auto;
      max-width: 800px;
   }

   > div h1 {
      font-size: 20px;
      flex-grow: 1;
      margin-bottom: 12px;
   }

   .icon-btn {
      color: grey;
   }

   .icon-btn:hover {
      color: #202020;
      background-color: #eee;
   }
`

function MainView({ children }) {
   return (
      <StyledMainView>
         {children}
      </StyledMainView>
   )
}

export default MainView
