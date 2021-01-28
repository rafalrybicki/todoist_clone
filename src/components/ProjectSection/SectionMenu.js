import React from 'react';
import PropTypes from 'prop-types';

import { firebase, projectsCollection } from '../../firebase';

import Popover from '../common/Popover';
import OptionsBtn from '../common/buttons/OptionsBtn';
import MenuList from '../common/MenuList';
import { Pen, ArrowRightCircle, Stickies, Trash } from 'react-bootstrap-icons';

function SectionMenu({ projectId, sectionId, edit }) {

   const deleteSection = () => {
      projectsCollection.doc(projectId).update({
         [`sections.${sectionId}`]: firebase.firestore.FieldValue.delete()
      })
   }

   return (
      <Popover
         activator={
            <OptionsBtn />
         }
         content={
            <MenuList>
               <li onClick={edit}>
                  <Pen size={16} />
                  Edit section
               </li>
               <li onClick={() => alert('coming soon')}>
                  <ArrowRightCircle size={16} />
                  Move section
               </li>
               <li onClick={() => alert('coming soon')}>
                  <Stickies size={16} />
                  Duplicate section
               </li>
               <li onClick={deleteSection}>
                  <Trash size={16} />
                  Delete section
               </li>
            </MenuList>
         }
      />
   )
}

SectionMenu.propTypes = {
   projectId: PropTypes.string.isRequired,
   sectionId: PropTypes.string.isRequired,
   edit: PropTypes.func.isRequired
}

export default SectionMenu
