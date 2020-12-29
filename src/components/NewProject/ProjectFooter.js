import React from 'react';
import styled from 'styled-components/macro';
import CancelBtn from '../shared/CancelBtn';
import SubmitBtn from '../shared/SubmitBtn';

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
