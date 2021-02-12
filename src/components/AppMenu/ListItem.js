import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import StyledListItem from './styled/ListItem';
// import Grip from '../Grip';

function ListItem({ name, path, icon, menu, closeMenu }) {
   return (
      <StyledListItem>
         {/* <Grip /> */}
         <NavLink
            to={path}
            onClick={closeMenu}
         >
            {icon}
            <span>
               {name}
            </span>
         </NavLink>
         {menu}
      </StyledListItem>
   )
}

ListItem.propTypes = {
   name: PropTypes.string.isRequired,
   path: PropTypes.string.isRequired,
   icon: PropTypes.node.isRequired,
   menu: PropTypes.node,
   closeMenu: PropTypes.func
}

export default ListItem
