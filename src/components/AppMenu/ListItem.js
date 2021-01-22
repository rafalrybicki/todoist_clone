import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

import { ThreeDots } from 'react-bootstrap-icons';
import Grip from '../common/Grip';

const StyledListItem = styled.li`
   font-size: 14px;
   position: relative;
   cursor: pointer;
   width: 244px;
   border-radius: 3px;

   .grip {
      top: -7px;
      left: -40px;
   }

   a {
      display: flex;
      align-items: center;
      border-radius: 3px;
      padding-left: 12px;
      color: #202020;
      height: 34px;
      
      &.active {
         font-weight: 700;
         background-color: white;
      }
      
      svg, div {
         margin-right: 13px;
      }

      .project-icon {
         margin: 2px 15px 0 2.5px;
         font-size: 12px;
      }

      .filter-icon {
         margin-top: 1px;
      }
   }

   .more {
      position: absolute;
      top: 10px;
      right: 0;
      visibility: hidden;
      cursor: pointer;
      width: 25px;
      padding-right: 6px;
      color: grey;

      &:hover {
         color: #202020;
      }
   }

   &:hover {
      background-color: white;

      .grip {
         color: grey;
      }

      .more {
         visibility: visible;
      }
   }
`

function ListItem({ text, path, onClick, children }) {
   return (
      <StyledListItem>
         <Grip />
         <NavLink to={path} onClick={onClick}>
            {children}
            <span>{text}</span>
         </NavLink>
         <ThreeDots className="more" />
      </StyledListItem>
   )
}

ListItem.propTypes = {
   text: PropTypes.string.isRequired,
   path: PropTypes.string.isRequired,
   onClick: PropTypes.func,
   children: PropTypes.node.isRequired,
}

export default ListItem
