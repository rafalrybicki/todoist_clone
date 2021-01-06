import React from 'react';
import styled from 'styled-components/macro';

const StyledMainView = styled.main`
   padding: 0 55px 36px;
   flex-grow: 1;
   overflow-y: scroll;
   overflow-x: hidden;
   z-index: 10;

   > div {
      margin: 0 auto;
      max-width: 800px;
   }

   header {
      display: flex;
      position: sticky;
      top: 0;
      padding: 36px 55px 10px;
      margin-left: -55px;
      margin-right: -55px;
      background-color: white;
      z-index: 100;

      h1 {
         font-size: 20px;
         flex-grow: 1;
         display: flex;
         align-items: center;
         font-family: 'Roboto', sans-serif;
      }
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
