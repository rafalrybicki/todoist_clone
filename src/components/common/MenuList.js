import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledMenuList = styled.ul`
   width: 250px;
   background-color: white;
   border-radius: 3px;
   border: 1px solid #ddd;
   box-shadow: 0 1px 8px 0 rgba(0,0,0,.08);
   color: #202020;

   li {
      position: relative;
      padding: 0 12px 0 35px;
      font-size: 13px;
      min-height: 32px;
      display: flex;
      align-items: center;
      cursor: pointer;

      > svg {
         position: absolute;
         top: 8px;
         left: 9px;
         color: #808080;
      }

      &.border-bottom {
         border-bottom: 1px solid #ddd;
      }

      &.active, &:hover {
         background-color: #ddd;
      }

      &.active::after {
         position: absolute;
         top: 6px;
         right: -2px;
         content: '✔';
         color: #202020;
         font-size: 16px;
         height: 30px;
         width: 30px;
      }
   }
`

function MenuList({ children }) {
   return (
      <StyledMenuList>
         {children}
      </StyledMenuList>
   )
}

MenuList.propTypes = {
   children: PropTypes.node.isRequired
}

export default MenuList
