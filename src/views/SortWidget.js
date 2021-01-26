import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { db } from '../firebase';

import IconBtn from '../components/common/buttons/IconBtn';
import { ArrowDown, ArrowUp } from 'react-bootstrap-icons';
import CloseBtn from '../components/common/buttons/CloseBtn';

const StyledSortWidget = styled.div`
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

function getSortDescription(sortType) {
   let description;

   switch(sortType) {
      case 'date':
         description = 'Sorted by due date';
         break;
      case 'priority':
         description = 'Sorted by priority';
         break;
      case 'content':
         description = 'Sorted alphabetically';
         break; 
      case 'assignee':
         description = 'Sorted by assignee';
         break; 
      default:
         description = 'Custom sorting';
   }

   return description
}

function SortWidget({ projectId, sortType, sortDirection }) {
   if (sortType === 'order' || !sortType) {
      return null
   }

   const projectRef = db.collection('projects').doc(projectId);

   const changeDirection = () => {
      const direction = sortDirection === 'down' ? 'up' : 'down';

      projectRef.update({
         sortDirection: direction
      })
   }

   const sortByOrder = () => {
      projectRef.update({
         sortType: 'order'
      })
   }

   return (
      <StyledSortWidget>
         <IconBtn onClick={changeDirection}>
            {sortDirection === 'down' && 
               <ArrowDown size={16} />
            }
            {sortDirection === 'up' && 
               <ArrowUp size={16} />
            }
         </IconBtn>
         <button onClick={() => console.log('custom sorting is coming soon')}>
            {getSortDescription(sortType)}
         </button>
         <CloseBtn onClick={sortByOrder} />
      </StyledSortWidget>
   )
}

SortWidget.propTypes = {
   sortType: PropTypes.oneOf([
      'order', 'date', 'priority', 'alphabetically', 'assignee', 'custom'
   ]),
   sortDirection: PropTypes.oneOf([
      'up', 'down'
   ])
}

export default SortWidget