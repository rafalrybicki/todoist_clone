import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import ListItem from './ListItem';
import InboxIcon from '../shared/InboxIcon';
import TodayIcon from '../shared/TodayIcon';
import { Calendar3 } from 'react-bootstrap-icons';

const StyledViewList = styled.ul`
   .inbox-icon {
      margin-left: -1px;
   }

   .grip, .more {
      display: none;
   }
`

function ViewList({ isMobile, closeMenu}) {
   return (
      <StyledViewList>
         <ListItem
            text="Inbox 6"
            path="/inbox"
            onClick={isMobile ? closeMenu : undefined}
         >
            <InboxIcon size={18} />
         </ListItem>
         <ListItem
            text="Today 2"
            path="/today"
            onClick={isMobile ? closeMenu : undefined}
         >
            <TodayIcon size={16} />
         </ListItem>
         <ListItem
            text="Upcoming"
            path="/upcoming"
            onClick={isMobile ? closeMenu : undefined}
         >
            <Calendar3
               color="#692fc2"
               size={16}
            />
         </ListItem>
      </StyledViewList>
   )
}

ViewList.propTypes = {
   isMobile: PropTypes.bool.isRequired,
   closeMenu: PropTypes.func.isRequired
}

export default ViewList
