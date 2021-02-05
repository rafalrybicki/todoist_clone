import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { auth } from 'firebase/index.js';
import { logout } from 'redux/actions';

import StyledAppBar from './styled/AppBar';
import IconBtn from 'buttons/IconBtn';
import { Justify, HouseDoor, DoorClosed } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';


function AppBar({ toggleMenu }) {
   const [zIndex, setZindex] = useState(1);
   const dispatch = useDispatch();

   const onLogout = () => {
      auth.signOut().then(() => dispatch(logout()))
   }

   return (
      <StyledAppBar
         zIndex={zIndex}
         onMouseEnter={() => setZindex (1000)}
         onMouseLeave={() => setZindex (1)}
      >
         <IconBtn
            hoverColor="#e27065"
            onClick={toggleMenu}
            tooltip="Open menu"
            tooltipWidth="74px"
         >
            <Justify
               color="white"
               size={22}
            />
         </IconBtn>

         <Link to="/today">
            <IconBtn
               hoverColor="#e27065"
               tooltip="Go to start page"
               tooltipWidth="97px"
               >
               <HouseDoor
                  color="white"
                  size={18}
               />
            </IconBtn>
         </Link>

         <SearchInput />

         <IconBtn
            hoverColor="#e27065"
            onClick={onLogout}
            tooltip="Logout"
            tooltipWidth="48px"
         >
            <DoorClosed
               size={18}
               color="white"
            />
         </IconBtn>
      </StyledAppBar>
   )
}

export default AppBar
