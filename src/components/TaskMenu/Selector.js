import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledSelector = styled.li`
   position: relative;
   border-bottom: 1px solid #ddd;

   > span {
      display: block;
      font-size: 11px;
      position: absolute;
      top: 7px;
      left: 10px;
   }

   > div {
      display: flex;
      padding: 27px 0 7px;
      margin-left: -29px;

      button {
         margin-right: 8px;

         &.active {
            border: 1px solid #ddd;
         }
      }
   }

   &:hover {
      background-color: white !important;
   }
`


function Selector({ children }) {
   return (
      <StyledSelector>
         {children}
      </StyledSelector>
   )
}

Selector.propTypes = {
   children: PropTypes.node.isRequired
}

export default Selector
