import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { useSelector } from 'react-redux';
import useActiveTasksQuantity from 'hooks/useActiveTasksQuantity';
import useTodayTasksQuantity from 'hooks/useTodayTasksQuantity';

import ListItem from './ListItem';
import ProjectListItem from './ProjectListItem';
import InboxIcon from 'icons/InboxIcon';
import TodayIcon from 'icons/TodayIcon';

const StyledViewList = styled.ul`
   .inbox-icon {
      margin-left: -1px;
   }

   .grip, .more {
      display: none;
   }
`

function ViewList({ isMobile, closeMenu}) {
   const favorites = useSelector(state => state.projects.filter(project => project.favorite));
   const inboxId = useSelector(state => state.user.id);
   const inboxQuantity = useActiveTasksQuantity(inboxId);
   const todayQuantity = useTodayTasksQuantity();

   return (
      <StyledViewList>
         <ListItem
            name={"Inbox " + inboxQuantity}
            path="/inbox"
            onClick={isMobile ? closeMenu : null}
         >
            <InboxIcon size={18} />
         </ListItem>
         <ListItem
            name={"Today " + todayQuantity}
            path="/today"
            onClick={isMobile ? closeMenu : null}
         >
            <TodayIcon size={16} />
         </ListItem>
         {/* <ListItem
            name="Upcoming"
            path="/upcoming"
            onClick={isMobile ? closeMenu : null}
         >
            <Calendar3
               color="#692fc2"
               size={16}
            />
         </ListItem> */}
         {favorites.map(favorite => 
            <ProjectListItem
               key={favorite.id}
               projectId={favorite.id}
               name={favorite.name}
               color={favorite.color}
               onClick={isMobile ? closeMenu : null}
            />
         )}
      </StyledViewList>
   )
}

ViewList.propTypes = {
   isMobile: PropTypes.bool.isRequired,
   closeMenu: PropTypes.func.isRequired
}

export default ViewList
