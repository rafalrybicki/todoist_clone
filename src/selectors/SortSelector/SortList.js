import React from 'react';
import PropTypes from 'prop-types';

import { projectsCollection } from 'firebase/index.js';

import MenuList from 'components/MenuList';
import SortListitem from './SortListItem';
import { CalendarEvent, Flag, SortAlphaDown } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { updateProject } from 'redux/actions';

function SortList({ sortType, projectId }) {
   const dispatch = useDispatch();

   const sortBy = (sortType) => {
      const field = {
         sortType
      };

      projectsCollection.doc(projectId).update(field);
      dispatch(updateProject(projectId, field))
   }

   return (
      <MenuList>
         <SortListitem
            text="Sort by due date"
            isActive={sortType === 'targetDate'}
            onClick={() => sortBy('targetDate')}
         >
            <CalendarEvent size={16} />
         </SortListitem>

         <SortListitem
            text="Sort by priority"
            isActive={sortType === 'priority'}
            onClick={() => sortBy('priority')}
         >
            <Flag size={16} />
         </SortListitem>

         <SortListitem
            text="Sort by alphabetically"
            isActive={sortType === 'content'}
            onClick={() => sortBy('content')}
         >
            <SortAlphaDown size={16} />
         </SortListitem>
      </MenuList>
   )
}

SortList.propTypes = {
   sortType: PropTypes.string.isRequired,
   projectId: PropTypes.string.isRequired
}

export default SortList
