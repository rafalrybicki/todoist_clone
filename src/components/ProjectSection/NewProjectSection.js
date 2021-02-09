import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { updateDocument } from 'firebase/index.js';
import { v4 as uuid } from 'uuid';

import StyledNewProjectSection from './styled/NewProjectSection';
import Editor from 'components/Editor';

function NewProjectSection({ projectId, order }) {
   const [openEditor, setOpenEditor] = useState(false);

   const toggleEditor = () => {
      setOpenEditor(openEditor => !openEditor)
   }

   const addNewSection = (name) => {
      const id = uuid();

      updateDocument('projects', projectId, {
         [`sections.${id}`]: {
            id,
            order,
            isOpen: true,
            name
         }
      });

      toggleEditor()
   }

   return (
      <StyledNewProjectSection>
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
               submitBtnText="Add section"
            />
         }
      </StyledNewProjectSection>
   )
}

NewProjectSection.propTypes = {
   projectId: PropTypes.string.isRequired,
   order: PropTypes.number.isRequired
}

export default NewProjectSection
