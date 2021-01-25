import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { useSelector } from 'react-redux';

import ListItem from './ListItem';
import InboxIcon from '../common/icons/InboxIcon';
import TodayIcon from '../common/icons/TodayIcon';
import { Calendar3, CircleFill } from 'react-bootstrap-icons';

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
   console.log(favorites)
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
         {favorites.map(favorite => 
            <ListItem
               key={favorite.id}
               text={favorite.name}
               path={'/project/' + favorite.id}
               onClick={isMobile ? closeMenu : undefined}
            >
               <CircleFill
                  size={12}
                  color={favorite.color}
                  className="project-icon"
               />
            </ListItem>
         )}
      </StyledViewList>
   )
}

ViewList.propTypes = {
   isMobile: PropTypes.bool.isRequired,
   closeMenu: PropTypes.func.isRequired
}

export default ViewList
