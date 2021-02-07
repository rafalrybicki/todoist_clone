import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import useFavoriteProjects from 'hooks/useFavoriteProjects';
import useUserId from 'hooks/useUserId';
import useProjectTasksQuantity from 'hooks/useProjectTasksQuantity';
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

function ViewList({ closeMenu}) {
   const favorites = useFavoriteProjects();
   const inboxId = useUserId();
   const inboxQuantity = useProjectTasksQuantity(inboxId);
   const todayQuantity = useTodayTasksQuantity();

   return (
      <StyledViewList className="view-list">
         <ListItem
            name={"Inbox " + inboxQuantity}
            path="/inbox"
            onClick={closeMenu}
         >
            <InboxIcon size={18} />
         </ListItem>
         <ListItem
            name={"Today " + todayQuantity}
            path="/today"
            onClick={closeMenu}
         >
            <TodayIcon size={16} />
         </ListItem>
         {/* <ListItem
            name="Upcoming"
            path="/upcoming"
            onClick={closeMenu}
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
               onClick={closeMenu}
            />
         )}
      </StyledViewList>
   )
}

ViewList.propTypes = {
   closeMenu: PropTypes.func
}

export default ViewList
