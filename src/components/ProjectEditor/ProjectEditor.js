import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useUserId from 'hooks/useUserId';
import { updateDocument, addToCollection } from 'firebase/index.js';
import { closeProjectEditor, addProject, updateProject } from 'redux/actions';

import StyledProjectEditor from './styled/ProjectEditor';
import ToggleSwitch from './ToggleSwitch';
import ViewSelector from './ViewSelector';
import CancelBtn from 'buttons/CancelBtn';
import SubmitBtn from 'buttons/SubmitBtn';
import ColorPicker from './ColorPicker';
import Overlay from 'components/Overlay';

function ProjectEditor() {
   const [name, setName] = useState('');
   const [color, setColor] = useState('#808080');
   const [favorite, setFavorite] = useState(false);
   const [view, setView] = useState('list');

   const project = useSelector(state => state.projectEditor.project);
   const isOpen = useSelector(state => state.projectEditor.isOpen);
   const userId = useUserId();

   const dispatch = useDispatch();
   const nextOrder = 1;

   useEffect(() => {
      if (isOpen && project) {
         setName(project.name);
         setColor(project.color);
         setFavorite(project.favorite);
         setView(project.view);
      } else {
         setName('');
         setColor('#808080');
         setFavorite(false);
         setView('list');
      }
   }, [isOpen, project])

   const edit = (e) => {
      e.preventDefault();

      const editedProject = {
         name,
         color: color.val || color,
         favorite,
         view
      }

      updateDocument('projects', project.projectId, editedProject);
      dispatch(updateProject(project.projectId, editedProject));
      close();
   }

   const add = async (e) => {
      e.preventDefault();

      if (name.trim() === '') {
         return
      };

      const newProject = {
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
      };

      const id = await addToCollection('projects', newProject);
      
      dispatch(addProject({id, ...newProject}));
      close();
   }

   const close = () => {
      dispatch(closeProjectEditor())
   }

   return (
      <StyledProjectEditor isOpen={isOpen}>
         <form onSubmit={project ? edit : add}>
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
