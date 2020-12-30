import React from 'react';
import styled from 'styled-components/macro';

import { InboxFill } from 'react-bootstrap-icons';

const StyledProjectPicker = styled.div`
   margin-right: auto;
   
   button {
      height: 28px;
      padding: 0 8px;
      border: 1px solid #ccc;
      border-radius: 3px;
      color: #555;

      svg {
         margin-right: 3px;
         margin-bottom: -1.5px;
      }
   }

   button:hover, button:focus {
      background-color: #eee;
   }
`

function ProjectPicker() {
   return (
      <StyledProjectPicker>
         <button>
            <InboxFill  size="14"/> Inbox
         </button>
      </StyledProjectPicker>
   )
}

export default ProjectPicker
