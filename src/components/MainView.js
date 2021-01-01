import React from 'react';
import styled from 'styled-components/macro';

const StyledMainView = styled.main`
   padding: 36px 55px;
   flex-grow: 1;

   h1 {
      font-size: 20px;
      flex-grow: 1;
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
