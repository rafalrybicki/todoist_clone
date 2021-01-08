import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import CloseBtn from './buttons/CloseBtn';
import IconBtn from './IconBtn';
import { ArrowDown, ArrowUp } from 'react-bootstrap-icons';

const StyledViewSortOptions = styled.div`
   padding: 10px 3px 10px 0;
   display: flex;
   align-items: center;
   justify-content: flex-end;

   button {
      height: 32px;
      color: grey;

      &:nth-of-type(2) {
         font-size: 14px;
         font-family: Arial, Helvetica, sans-serif;
         font-weight: 700;
         padding: 0 4px;
         margin-left: -2px;
      }

      &:hover {
         background-color: #eee;
         color: #202020;

         svg {
            fill: #202020;
         }
      }
   }
`

function ViewSortOptions({ sortBy, sortDirection, reverseDirection, resetSorting }) {
   let text;

   switch(sortBy) {
      case 'date':
         text = 'Sorted by due date';
         break;
      case 'priority':
         text = 'Sorted by priority';
         break;
      case 'content':
         text = 'Sorted alphabetically';
         break; 
      case 'assignee':
         text = 'Sorted by assignee';
         break; 
      default:
         text = 'Custom sorting';
   }

   return (
      <StyledViewSortOptions sortBy={sortBy}>
         <IconBtn
            onClick={reverseDirection}
         >
            {sortDirection === 'up' ?  <ArrowDown size={16} /> : <ArrowUp size={16} />}
         </IconBtn>
         <button
            onClick={() => alert('custom sorting')}
         >
            {text}
         </button>
         <CloseBtn onClick={resetSorting} />
      </StyledViewSortOptions>
   )
}

ViewSortOptions.propTypes = {
   sortBy: PropTypes.oneOf(['date', 'priority', 'content', 'assignee', 'custom']).isRequired,
   sortDirection: PropTypes.oneOf(['up', 'down']).isRequired,
   reverseDirection: PropTypes.func.isRequired,
   resetSorting: PropTypes.func.isRequired
}

export default ViewSortOptions