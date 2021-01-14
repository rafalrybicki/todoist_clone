import React from 'react';
import styled from 'styled-components/macro';

import CancelBtn from '../common/CancelBtn';
import SubmitBtn from '../common/SubmitBtn';

const StyledProjectFooter = styled.footer`
   height: 57px;
   display: flex;
   align-items: center;
   justify-content: flex-end;

   button:nth-of-type(2) {
      margin-left: 10px;
   }
`

function ProjectFooter() {
   return (
      <StyledProjectFooter>
         <CancelBtn />
         <SubmitBtn text="Add" disabled={false} />
      </StyledProjectFooter>
   )
}

export default ProjectFooter
