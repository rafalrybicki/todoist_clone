import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Overlay from '../common/Overlay'

import ViewList from './ViewList';
import ProjectList from './ProjectList';
// import FilterList from './FilterList';

const StyledMenu = styled.div`
   position: absolute;
   z-index: 99;
   top: 0;
   padding: 63px 0 30px;
   background-color: #FAFAFA;
   height: 100%;
   width: ${props => props.isOpen ? '291px' : '0'};
   flex-shrink: 0;
   font-size: 14px;
   overflow-y: auto;
   overflow-x: hidden;
   transition: 0.2s width;

   > * {
      width: 291px;
      padding-left: 37px;
      padding-right: 10px;
   }

   @media (min-width: 750px) {
      position: static;
      padding: 30px 0 30px;
   }
`

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
         <StyledMenu isOpen={isOpen}>
            <ViewList
               isMobile={isMobile}
               closeMenu={closeMenu}
            />
            <ProjectList
               isMobile={isMobile}
               closeMenu={closeMenu}
            />
            {/* <FilterList
               isMobile={isMobile}
               closeMenu={closeMenu}
            /> */}
         </StyledMenu>

         <Overlay show={isOpen && isMobile} hide={closeMenu} />
      </>
   )
}

AppMenu.propTyps = {
   isOpen: PropTypes.bool.isRequired,
   closeMenu: PropTypes.func.isRequired
}

export default AppMenu
