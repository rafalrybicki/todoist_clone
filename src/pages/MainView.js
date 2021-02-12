import React from 'react';
import styled from 'styled-components/macro';

const StyledMainView = styled.main`
   flex-grow: 1;
   height: 100%;
   overflow: hidden;
   background-color: white;
   
   .view {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 0 25px;
      overflow-y: auto;

      > * {
         max-width: 800px;
         margin: 0 auto;
      }

      > header {
         padding-top: 30px;
         display: flex;
         position: sticky;
         top: 0;
         background-color: white;
         z-index: 10;

         h1 {
            font-size: 20px;
            flex-grow: 1;
            display: flex;
            align-items: center;
            margin-bottom: 10px;
         }
      }
   }

   .icon-btn {
      color: grey;
   }

   .icon-btn:hover {
      color: #202020;
      background-color: #eee;
   }

   @media (min-width: 750px) {
      .view {
         padding: 0 55px;
      }
   }
`

function MainView({ children }) {
   return (
      <StyledMainView id="main">
         {children}
      </StyledMainView>
   )
}

export default MainView
