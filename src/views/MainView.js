import React from 'react';
import styled from 'styled-components/macro';

const StyledMainView = styled.main`
   position: relative;
   padding: 0 55px 36px;
   flex-grow: 1;
   overflow-y: scroll;
   z-index: 1;

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
      z-index: 1000;

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
