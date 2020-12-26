import React from 'react';
import styled from 'styled-components';

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
         <button className="btn">Cancel</button>
         <button disabled className="btn btn-submit">Add</button>
      </StyledProjectFooter>
   )
}

export default ProjectFooter
