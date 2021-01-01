import React from 'react';
import styled from 'styled-components/macro';

const StyledMainView = styled.main`
   position: relative;
   padding: 0 55px 36px;
   flex-grow: 1;
   overflow-y: scroll;

   > div {
      margin: 0 auto;
      max-width: 800px;
   }

   > div h1 {
      font-size: 20px;
      flex-grow: 1;
      margin-bottom: 12px;
      font-family: Arial, Helvetica, sans-serif
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
