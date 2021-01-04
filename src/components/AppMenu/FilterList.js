import React from 'react';
import PropTypes from 'prop-types';

import ExpandableList from './ExpandableList';
import ListItem from './ListItem';
import { DropletFill } from 'react-bootstrap-icons';

function FilterList({ isMobile, closeMenu}) {
   return (
      <ExpandableList text="Filters">
         <ListItem
            text="Priorytet 1"
            path="/inbox"
            onClick={isMobile ? closeMenu : undefined}
         >
            <DropletFill
               className="filter-icon"
            />
         </ListItem>
         <ListItem
            text="Priorytet 2"
            path="/inbox"
            onClick={isMobile ? closeMenu : undefined}
         >
            <DropletFill
               className="filter-icon"
            />
         </ListItem>
         <ListItem
            text="Filter"
            path="/inbox"
            onClick={isMobile ? closeMenu : undefined}
         >
            <DropletFill
               className="filter-icon"
            />
         </ListItem>
      </ExpandableList>
   )
}

FilterList.propTypes = {
   isMobile: PropTypes.bool.isRequired,
   closeMenu: PropTypes.func.isRequired
}

export default FilterList
