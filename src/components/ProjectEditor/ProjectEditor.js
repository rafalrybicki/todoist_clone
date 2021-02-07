import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import useUserId from 'hooks/useUserId';
import { addToCollection } from 'firebase/index.js';

import StyledProjectEditor from './styled/ProjectEditor';
import ToggleSwitch from './ToggleSwitch';
import ViewSelector from './ViewSelector';
import CancelBtn from 'buttons/CancelBtn';
import SubmitBtn from 'buttons/SubmitBtn';
import ColorPicker from './ColorPicker';
import Overlay from 'components/Overlay';

function ProjectEditor({ isOpen, close }) {
   const userId = useUserId();
   const [name, setName] = useState('');
   const [color, setColor] = useState('#808080');
   const [favorite, setFavorite] = useState(false);
   const [view, setView] = useState('list');
   
   const nextOrder = useSelector(state => state.projects.length);

   const addProject = (e) => {
      e.preventDefault();

      if (name.trim() === '') {
         return
      }

      addToCollection('projects', {
         ownerId: userId,
         name: name.trim(),
         order: nextOrder,
         color: color.val ? color.val : color,
         favorite,
         view,
         sortType: 'order',
         sortOrder: 'asc',
         sections: {
            default: {
               id: 'default',
               name: 'default',
               order: 0,
               isOpen: true
            }
         },
         comments: []
      })

      close()
   }

   return (
      <StyledProjectEditor isOpen={isOpen}>
         <form onSubmit={addProject}>
            <h1>Add project</h1>
            <label htmlFor="name">Name</label>
            <input
               type="text"
               name="name"
               id="name"
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
            <ColorPicker
               currentColor={color}
               setColor={setColor}
            />
            <ToggleSwitch
               value={favorite}
               setValue={() => setFavorite(favorite => !favorite)}
            />
            <ViewSelector
               view={view}
               setView={(view) => setView(view)}
            />
            <CancelBtn onClick={close} />
            <SubmitBtn
               text="Add"
               disabled={name.trim() === ''}
            />
         </form>
         <Overlay
            show={true}
            hide={close}
         />
      </StyledProjectEditor>
   )
}

ProjectEditor.propTypes = {
   isOpen: PropTypes.bool.isRequired,
   close: PropTypes.func.isRequired
}

export default ProjectEditor
