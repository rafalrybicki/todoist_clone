import React from 'react';
import PropTypes from 'prop-types';

import Popover from '../Popover';
import OptionsBtn from '../appButtons/OptionsBtn';
import MenuList from '../MenuList';
import { Pen, ArrowRightCircle, Stickies, Trash } from 'react-bootstrap-icons';

function SectionMenu({ openEditor, remove, duplicate }) {
   return (
      <Popover
         activator={
            <OptionsBtn />
         }
         content={
            <MenuList>
               <li onClick={openEditor}>
                  <Pen size={16} />
                  Edit section
               </li>
               <li onClick={() => alert('coming soon')}>
                  <ArrowRightCircle size={16} />
                  Move section
               </li>
               <li onClick={duplicate}>
                  <Stickies size={16} />
                  Duplicate section
               </li>
               <li onClick={remove}>
                  <Trash size={16} />
                  Delete section
               </li>
            </MenuList>
         }
      />
   )
}

SectionMenu.propTypes = {
   openEditor: PropTypes.func.isRequired,
   remove: PropTypes.func.isRequired,
   duplicate: PropTypes.func.isRequired 
}

export default SectionMenu
