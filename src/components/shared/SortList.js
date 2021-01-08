import React from 'react';
import PropTypes from 'prop-types';

import MenuList from './MenuList';
import SortListitem from './SortListItem';
import { CalendarEvent, Flag, Gear, Person, SortAlphaDown } from 'react-bootstrap-icons';

function SortList({ sortBy, changeSorting }) {
   return (
      <MenuList>
         <SortListitem
            changeSorting={changeSorting}
            value={'date'}
            active={sortBy === 'date'}
         >
            <CalendarEvent size={16} />
         </SortListitem>
         <SortListitem
            changeSorting={changeSorting}
            value={'priority'}
            active={sortBy === 'priority'}
         >
            <Flag size={16} />
         </SortListitem>
         <SortListitem
            changeSorting={changeSorting}
            value={'content'}
            active={sortBy === 'content'}
         >
            <SortAlphaDown size={16} />
         </SortListitem>
         <SortListitem
            changeSorting={changeSorting}
            value={'assignee'}
            active={sortBy === 'assignee'}
         >
            <Person size={16} />
         </SortListitem>
         <SortListitem
            changeSorting={changeSorting}
            value={'custom'}
            active={sortBy === 'custom'}
         >
            <Gear size={16} />
         </SortListitem>
      </MenuList>
   )
}

SortList.propTypes = {
   sortBy: PropTypes.string.isRequired,
   changeSorting: PropTypes.func.isRequired
}

export default SortList
