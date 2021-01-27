import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { firebase, projectsCollection } from '../../firebase';
import { v4 as uuid } from 'uuid';

import Editor from '../Editor';

const StyledNewSection = styled.div`
   position: relative;
   width: 100%;
   padding-top: 32px;

   > button {
      position: absolute;
      top: 0;
      left: 0;
      height: 32px;
      width: 100%;
      color: transparent;
      font-weight: bold;
      font-size: 14px;

      span {
         position: absolute;
         top: 5px;
         left: 50%;
         transform: translateX(-50%);
         z-index: 10;
         display: block;
         margin: 0 auto;
         background-color: white;
         padding: 0 10px;
      }
      
      &:before {
         position: absolute;
         left: 0;
         top: 16px;
         content: '';
         width: 100px;
         height: 1px;
         width: 100%;
         transition: all .1s;
      }

      &:hover {
         color: red;

         &:before {
            background-color: red;
         }
      }
   }

   .editor {
      width: 100%;
   }
`

function NewSection({ projectId, nextOrder }) {
   const [editor, showEditor] = useState(false);

   const addNewSection = (name) => {
      const projectRef = projectsCollection.doc(projectId)
      const newSection = {
         name,
         id: uuid(),
         order: nextOrder,
         isOpen: true
      }
   
      projectRef.update({
         sections: firebase.firestore.FieldValue.arrayUnion(newSection)
      })
   }

   return (
      <StyledNewSection>
         {!editor &&
            <button
               onClick={() => showEditor(true)}
            >
               <span>Add Section</span>
            </button>
         }
         {editor && 
            <Editor
               onSave={addNewSection}
               onClose={() => showEditor(false)}
            />
         }
      </StyledNewSection>
   )
}

export default NewSection
