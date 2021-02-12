import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useUserId from 'hooks/useUserId';
import { updateDocument, addToCollection } from 'firebase/index.js';
import { closeProjectEditor } from 'redux/actions';

import StyledProjectEditor from './styled/ProjectEditor';
import ToggleSwitch from './ToggleSwitch';
import ViewSelector from './ViewSelector';
import CancelBtn from 'buttons/CancelBtn';
import SubmitBtn from 'buttons/SubmitBtn';
import ColorPicker from './ColorPicker';
import Overlay from 'components/Overlay';

function ProjectEditor() {
   const dispatch = useDispatch();
   const isOpen = useSelector(state => state.projectEditor.isOpen);
   const project = useSelector(state => state.projectEditor.project);
   const userId = useUserId();
   const [name, setName] = useState(project.name || '');
   const [color, setColor] = useState(project.color || '#808080');
   const [favorite, setFavorite] = useState(project.favorite || false);
   const [view, setView] = useState(project.view || 'list');
   
   // const nextOrder = useSelector(state => state.projects[state.projects.length - 1].order);
   const nextOrder = 0

   const editProject = () => {
      console.log('edit project');
      updateDocument('projects', project.projectId, {
         name,
         color: color.val || color,
         favorite,
         view
      });
      close();
   }

   const addProject = (e) => {
      console.log('add project');
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

   const close = () => {
      dispatch(closeProjectEditor())
   }

   return (
      <StyledProjectEditor isOpen={isOpen}>
         <form onSubmit={project.projectId ? editProject : addProject}>
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

export default ProjectEditor
