import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { projectsCollection } from 'firebase/index.js';
import { updateProject } from 'redux/actions';

import IconBtn from 'buttons/IconBtn';
import { ArrowDown, ArrowUp } from 'react-bootstrap-icons';
import CloseBtn from 'buttons/CloseBtn';

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
      case 'targetDate':
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

function SortWidget({ projectId, sortType, sortOrder }) {
   const dispatch = useDispatch();

   if (sortType === 'order' || !sortType) {
      return null
   }

   const projectRef = projectsCollection.doc(projectId);

   const changeOrder = () => {
      const direction = sortOrder === 'desc' ? 'asc' : 'desc';

      const field = {
         sortOrder: direction
      };

      projectRef.update(field);
      dispatch(updateProject(projectId, field));
   }

   const resetSorting = () => {
      const fields = {
         sortType: 'order',
         sortOrder: 'asc'
      };

      projectRef.update(fields);
      dispatch(updateProject(projectId, fields));
   }

   return (
      <StyledSortWidget>
         <IconBtn onClick={changeOrder}>
            {sortOrder === 'asc' && 
               <ArrowDown size={16} />
            }
            {sortOrder === 'desc' && 
               <ArrowUp size={16} />
            }
         </IconBtn>
         <button>
            {getSortDescription(sortType)}
         </button>
         <CloseBtn onClick={resetSorting} />
      </StyledSortWidget>
   )
}

SortWidget.propTypes = {
   sortType: PropTypes.oneOf([
      'order', 'targetDate', 'priority', 'content', 'assignee', 'custom'
   ]).isRequired,
   sortOrder: PropTypes.oneOf([
      'asc', 'desc'
   ]).isRequired
}

export default SortWidget