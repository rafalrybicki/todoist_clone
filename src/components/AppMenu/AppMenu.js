import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StyledMenu from './styled/AppMenu';
import Overlay from '../Overlay'
import ViewList from './ViewList';
import ProjectList from './ProjectList';
import ProjectEditor from 'components/ProjectEditor/ProjectEditor';

function AppMenu({ isOpen, closeMenu }) {
   const [isMobile, setIsMobile] = useState(window.innerWidth < 750);
   const [isEditorOpen, setIsEditorOpen] = useState(false);

   const toggleProjectEditor = () => {
      setIsEditorOpen(isEditorOpen => !isEditorOpen);
   }

   useEffect(() => {
      function handleResize() {
         setIsMobile(window.innerWidth < 750);
      }
  
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
   }, []);

   return (
      <>
         <StyledMenu isOpen={isOpen}>
            <ViewList
               closeMenu={isMobile ? closeMenu : null}
            />
            <ProjectList
               closeMenu={isMobile ? closeMenu : null}
               openProjectEditor={toggleProjectEditor}
            />
            <ProjectEditor
               isOpen={isEditorOpen}
               close={toggleProjectEditor}
            />
         </StyledMenu>

         <Overlay
            show={isOpen && isMobile}
            hide={closeMenu}
         />
      </>
   )
}

AppMenu.propTyps = {
   isOpen: PropTypes.bool.isRequired,
   closeMenu: PropTypes.func.isRequired
}

export default AppMenu
