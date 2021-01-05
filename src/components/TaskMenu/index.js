import React from 'react';

import MenuList from '../shared/MenuList';
import { Alarm, ArrowDownShort, ArrowRightCircle, ArrowUpShort, Link45deg, ListUl, Pen, Stickies, Trash } from 'react-bootstrap-icons';
import Selector from './Selector';
import Priority from './Priority';
import Schedule from './Schedule';

function Menu() {
   return (
      <MenuList>
         <li>
            <ArrowUpShort size={24} className="arrow-icon" />
            Add task above
         </li>
         <li>
            <ArrowDownShort size={24} className="arrow-icon"/>
            Add task below
         </li>
         <li>
            <Pen size={18} />
            Edit task
         </li>
         <li className="border-bottom">
            <ListUl size={18} />
            Go to project
         </li>
         <Selector>
            <span>Schedule</span>
            <Schedule />
         </Selector>
         <Selector>
            <span>Priority</span>
            <Priority />
         </Selector>
         <li className="border-bottom">
            <Alarm size={17} />
            Reminders
         </li>
         <li>
            <ArrowRightCircle size={18} />
            Move to project
         </li>
         <li>
            <Stickies size={18} />
            Duplicate
         </li>
         <li className="border-bottom">
            <Link45deg size={18} />
            Copy link to task
         </li>
         <li>
            <Trash size={18} />
            Delete task
         </li>
      </MenuList>
   )
}

export default Menu
