import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledCheckbox = styled.span`
   position: absolute;
   display: block;
   border-radius: 50%;
   border-width: ${props => props.color === 'grey' ? '1px' : '2px'};
   border-style: solid;
   border-color: ${props => props.color};
   background-color: ${props => props.color === 'grey' ? 'white' : 'rgba(209,69,59,.1)'};
   height: 18px;
   width: 18px;
   margin-right: 7px;
   padding-top: 1px;
   padding-left: 4px;
   cursor: pointer;
   font-size: 10px;
   color: transparent;
   transition: all .1s;
   user-select: none;

   &:hover {
      background-color: rgba(209,69,59,.2);
      color: grey;
   }

   &.completed {
      background-color: #808080;
      color: white;
      border-color: transparent
   }
`

function Checkbox({ isCompleted, priority, onClick }) {
   const colors = {
      1: 'rgb(209, 69, 59)',
      2: 'rgb(235, 137, 9)',
      3: 'rgb(36, 111, 224)',
      4: 'grey',
   }

   return (
      <StyledCheckbox
         color={colors[priority]}
         className={isCompleted ? "checkbox completed" : "checkbox"}
         onClick={onClick}
      >
         &#10004;
      </StyledCheckbox>
   )
}

Checkbox.propTypes = {
   isCompleted: PropTypes.bool,
   priority: PropTypes.number.isRequired,
   onClick: PropTypes.func.isRequired
}

export default Checkbox
