import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import StyledEditor from 'styled/Editor';
import SubmitBtn from 'buttons/SubmitBtn';
import CancelBtn from 'buttons/CancelBtn';

import useOutsideClick from 'hooks/useOutsideClick';

function Editor({ currentContent = '', onSave, submitBtnText = 'Save', onClose }) {
   const [content, setContent] = useState(currentContent);

   const editorRef = useRef(null);
   
   useOutsideClick(true, editorRef, onClose);

   const handleSubmit = (e) => {
      e.preventDefault()
      onSave(content)
   }

   return (
      <StyledEditor
         ref={editorRef}
         onSubmit={handleSubmit}
      >
         <input
            type="text"
            autoFocus
            autoComplete="off"
            value={content}
            onChange={(e) => setContent(e.target.value)}
         />

         <SubmitBtn
            text={submitBtnText}
            disabled={content === currentContent || content === ''}
         />
         <CancelBtn onClick={onClose} />
      </StyledEditor>
   )
}

Editor.propTypes = {
   currentContent: PropTypes.string,
   onSave: PropTypes.func.isRequired,
   submitBtnText: PropTypes.string,
   onClose: PropTypes.func.isRequired
}

export default Editor
