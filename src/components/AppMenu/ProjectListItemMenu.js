import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { updateDocument, deleteFromCollection } from 'firebase/index.js';
import { updateProject, deleteProject, deleteTask, openProjectEditor } from 'redux/actions';

import OptionsBtn from 'buttons/OptionsBtn';
import Popover from 'components/Popover';
import MenuList from 'components/MenuList';
import { Pen, Heart, Trash } from 'react-bootstrap-icons';

function ProjectListItemMenu({ projectId, name, color, favorite, view }) {
   const dispatch = useDispatch();
   const tasks = useSelector(state => state.tasks.filter(task => task.projectId === projectId));
   const history = useHistory();

   const edit = () => {
      dispatch(openProjectEditor({
         projectId,
         name,
         color,
         favorite,
         view
      }))
   }

   const toggleFavorite = () => {
      updateDocument('projects', projectId, {
         favorite: !favorite
      });
      dispatch(updateProject(projectId, { favorite: !favorite }));
   }

   const remove = () => {
      if(history.location.pathname.includes(projectId)) {
         history.replace('/today');
      }
      
      tasks.forEach(task => {
         deleteFromCollection('tasks', task.id);
         dispatch(deleteTask(task.id))
      })

      deleteFromCollection('projects', projectId);
      dispatch(deleteProject(projectId));
   }

   return (
      <Popover
         activator={<OptionsBtn />}
      >
         <MenuList>
            <li onClick={edit}>
               <Pen size={16} />Edit project
            </li>
            <li onClick={toggleFavorite}>
               <Heart size={16} />
               {favorite ? 'Remove from favorites' : 'Add to favorites'}
            </li>
            <li onClick={remove}>
               <Trash size={16} />Delete project
            </li>
         </MenuList>
      </Popover>
   )
}

export default ProjectListItemMenu
