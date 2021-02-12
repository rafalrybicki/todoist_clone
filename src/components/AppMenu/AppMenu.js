import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StyledAppMenu from './styled/AppMenu';
import ViewList from './ViewList';
import ProjectList from './ProjectList';
import Overlay from 'components/Overlay';

function AppMenu({ isOpen, closeMenu }) {
   const [isMobile, setIsMobile] = useState(window.innerWidth < 750);

   useEffect(() => {
      function handleResize() {
         setIsMobile(window.innerWidth < 750);
      }
  
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
   }, []);

   return (
      <>
         <StyledAppMenu isOpen={isOpen}>
            <nav>
               <ViewList
                  closeMenu={isMobile ? closeMenu : null}
               />
               <ProjectList
                  closeMenu={isMobile ? closeMenu : null}
               />
            </nav>
         </StyledAppMenu>
         <Overlay
            show={isMobile && isOpen}
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
