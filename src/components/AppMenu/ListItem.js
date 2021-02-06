import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import StyledListItem from './styled/ListItem';
import Grip from '../Grip';
import OptionsBtn from 'buttons/OptionsBtn';

function ListItem({ name, path, onClick, children }) {
   return (
      <StyledListItem>
         <Grip />
         <NavLink to={path} onClick={onClick}>
            {children}
            <span>
               {name}
            </span>
         </NavLink>
         <OptionsBtn />
      </StyledListItem>
   )
}

ListItem.propTypes = {
   name: PropTypes.string.isRequired,
   path: PropTypes.string.isRequired,
   onClick: PropTypes.func,
   children: PropTypes.node.isRequired,
}

export default ListItem
