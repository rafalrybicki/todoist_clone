import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import { updateDocument } from 'firebase/index.js';
import { addProjectSection } from 'redux/actions';

import StyledNewProjectSection from './styled/NewProjectSection';
import Editor from 'components/Editor';

function NewProjectSection({ projectId, order }) {
   const [openEditor, setOpenEditor] = useState(false);
   const dispatch = useDispatch();

   const toggleEditor = () => {
      setOpenEditor(openEditor => !openEditor)
   }

   const addNewSection = (name) => {
      const sectionId = uuid();
      const section = {
         id: sectionId,
         order,
         isOpen: true,
         name
      }

      updateDocument('projects', projectId, {
         [`sections.${sectionId}`]: section
      });

      dispatch(addProjectSection(projectId, sectionId, section));

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
