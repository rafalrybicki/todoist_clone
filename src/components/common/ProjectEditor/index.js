import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { auth, projectsCollection } from '../../../firebase';

import ToggleSwitch from './ToggleSwitch';
import ViewSelector from './ViewSelector';
import CancelBtn from '../buttons/CancelBtn';
import SubmitBtn from '../buttons/SubmitBtn';
import ColorPicker from './ColorPicker';
import { useSelector } from 'react-redux';

const StyledProjectEditor = styled.form`
   position: fixed;
   display: flex;
   flex-direction: column;
   top: 43px;
   left: 50%;
   transform: translateX(-50%); 
   width: 100vw;
   max-width: 400px;
   border-radius: 5px;
   z-index: 100000;
   overflow: hidden;
   border: 1px solid #ddd;
   background-color: white;
   padding: 0 24px 85px;

   h1 {
      font-size: 16px;
      display: flex;
      align-items: center;
      height: 54px;
      border-bottom: 1px solid #ddd;
      background-color: #fafafa;
      padding: 0 24px;
      margin: 0 -24px 20px;
   }

   label, p {
      display: block;
      margin-bottom: 5px;
      font-size: 14px;
      font-weight: 700
   }

   input[type="text"] {
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 5px;
      outline: none;
      transition: border .3s;
      height: 31px;
      padding: 5px;
      font-size: 14px;
      margin-bottom: 20px;
   }

   input[type="text"]:focus {
      border: 1px solid black;
   }

   button {
      position: absolute;
      bottom: 18px;
      height: 32px;

      &.submit-btn {
         right: 24px;
      }

      &.cancel-btn {
         right: 86px;
      }
   }

   @media (min-width: 750px) {
      top: 73px;
   }
`

function ProjectEditor({ close }) {
   const [name, setName] = useState('');
   const [color, setColor] = useState('#808080');
   const [favorite, setFavorite] = useState(false);
   const [view, setView] = useState('list');
   
   const nextOrder = useSelector(state => state.projects.length);

   const addProject = (e) => {
      e.preventDefault();
      const projectRef = projectsCollection.doc();
      const id = projectRef.id
      
      projectRef.set({
         id,
         ownerId: auth.currentUser.uid,
         name,
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
         comments: [],
      })

      close()
   }

   return (
      <StyledProjectEditor onSubmit={addProject}>
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
            disabled={name === ''}
         />
      </StyledProjectEditor>
   )
}

ProjectEditor.propTypes = {
   close: PropTypes.func.isRequired
}

export default ProjectEditor
