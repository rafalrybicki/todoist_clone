import React, { useState } from 'react';
import styled from 'styled-components/macro';

const StyledNewSection = styled.div`
   position: relative;
   width: 100%;

   button {
      display:block;
      margin: 0 auto;
      color: transparent;
      font-weight: bold;
      font-size: 14px;
      height: 26px;
      background-color: white;
      padding: 0 7px;
   }

   &:after {
      position: absolute;
      top: 14px;
      content: '';
      z-index: -1;
      width: 100px;
      height: 1px;
      width: 100%;
      transition: all .1s;
   }

   &:hover {
      button {
         color: red;
      }

      &:after {
         background-color: red;
      }
   }
`

function NewSection() {
   const [editor, showEditor] = useState(false);

   return (
      <StyledNewSection>
         <button onClick={() => showEditor(true)}>Add Section</button>
         {editor && <span onClick={() => showEditor(false)}>editor</span>}
      </StyledNewSection>
   )
}

export default NewSection
