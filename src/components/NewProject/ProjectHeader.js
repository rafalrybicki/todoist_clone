import React from 'react';
import styled from 'styled-components';

import { QuestionCircle } from 'react-bootstrap-icons';

const StyledProjectHeader = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 54px;
   border-bottom: 1px solid #ddd;
   background-color: #fafafa;
   
   h1 {
      font-size: 16px;
   }
`

function Header() {
   return (
      <StyledProjectHeader>
         <h1>Add project</h1>
         <QuestionCircle />
      </StyledProjectHeader>
   )
}

export default Header
