import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StyledProjectSectionEditor from 'styled/ProjectSection/StyledProjectSectionEditor';
import SubmitBtn from 'components/appButtons/SubmitBtn';
import CancelBtn from 'components/appButtons/CancelBtn';

function ProjectSectionEditor({ currentName = '', onSave, submitBtnText = 'Save', onClose }) {
   const [name, setName] = useState(currentName);

   const handleSubmit = () => {
      onSave({ name })
   }

   return (
      <StyledProjectSectionEditor
         onSubmit={handleSubmit}
      >
         <input
            type="text"
            autoFocus
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />

         <SubmitBtn
            text={submitBtnText}
            disabled={name === currentName || name === ''}
         />
         <CancelBtn onClick={onClose} />
      </StyledProjectSectionEditor>
   )
}

ProjectSectionEditor.propTypes = {
   currentName: PropTypes.string,
   onSave: PropTypes.func.isRequired,
   submitBtnText: PropTypes.string,
   onClose: PropTypes.func.isRequired
}

export default ProjectSectionEditor
