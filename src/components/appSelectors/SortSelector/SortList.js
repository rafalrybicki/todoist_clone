import React from 'react';
import PropTypes from 'prop-types';

import { projectsCollection } from '../../../firebase';

import MenuList from '../../MenuList';
import SortListitem from './SortListItem';
import { CalendarEvent, Flag, Gear, Person, SortAlphaDown } from 'react-bootstrap-icons';

function SortList({ sortType, projectId }) {
   const sortBy = (sortType) => {
      projectsCollection.doc(projectId).update({
         sortType
      })
   }

   return (
      <MenuList>
         <SortListitem
            text="Sort by due date"
            isActive={sortType === 'date'}
            onClick={() => sortBy('date')}
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
            isActive={sortType === 'alphabetically'}
            onClick={() => sortBy('alphabetically')}
         >
            <SortAlphaDown size={16} />
         </SortListitem>

         <SortListitem
            text="Sort by assignee"
            isActive={sortType === 'assignee'}
            // onClick={() => sortBy('assignee')}
            onClick={() => alert('coming soon')}
         >
            <Person size={16} />
         </SortListitem>

         <SortListitem
            text="Custom sort"
            isActive={sortType === 'custom'}
            // onClick={() => sortBy('custom')}
            onClick={() => alert('coming soon')}
         >
            <Gear size={16} />
         </SortListitem>
      </MenuList>
   )
}

SortList.propTypes = {
   sortType: PropTypes.string.isRequired,
   projectId: PropTypes.string.isRequired
}

export default SortList
