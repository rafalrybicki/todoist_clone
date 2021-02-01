import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { projectsCollection } from '../../firebase';
import { v4 as uuid } from 'uuid';

import Editor from '../Editor/Editor';

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

function NewSection({ projectId, order }) {
   const [openEditor, setOpenEditor] = useState(false);

   const toggleEditor = () => {
      setOpenEditor(openEditor => !openEditor)
   }

   const addNewSection = (name) => {
      const projectRef = projectsCollection.doc(projectId);
      const sectionsUpdate = {};
      const id = uuid();

      sectionsUpdate[`sections.${id}`] = {
         id,
         name,
         order,
         isOpen: true
      };

      projectRef.update(sectionsUpdate)

      toggleEditor()
   }

   return (
      <StyledNewSection>
         {!openEditor &&
            <button
               onClick={toggleEditor}
            >
               <span>Add Section</span>
            </button>
         }
         {openEditor && 
            <Editor
               onSave={addNewSection}
               onClose={toggleEditor}
            />
         }
      </StyledNewSection>
   )
}

NewSection.propTypes = {
   projectId: PropTypes.string.isRequired,
   order: PropTypes.number.isRequired
}

export default NewSection
