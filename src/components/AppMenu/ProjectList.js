import React from 'react';
import PropTypes from 'prop-types';

import ExpandableList from './ExpandableList';
import ListItem from './ListItem';
import { CircleFill } from 'react-bootstrap-icons';
import NewItemBtn from '../shared/NewItemBtn';

function ProjectList({ isMobile, closeMenu }) {
   return (
      <ExpandableList text="projects">
         <ListItem
            text="Project 1"
            path="/project/1"
            onClick={isMobile ? closeMenu : undefined}
         >
            <CircleFill className="project-icon"
            />
         </ListItem>
         <ListItem
            text="Project 2"
            path="/project/2"
            onClick={isMobile ? closeMenu : undefined}
         >
            <CircleFill className="project-icon" />
         </ListItem>
         <ListItem
            text="Project 3"
            path="/project/3"
            onClick={isMobile ? closeMenu : undefined}
         >
            <CircleFill className="project-icon" />
         </ListItem>
         <NewItemBtn text="Add project" width="110px" />
      </ExpandableList>
   )
}

ProjectList.propTypes = {
   isMobile: PropTypes.bool.isRequired,
   closeMenu: PropTypes.func.isRequired
}

export default ProjectList
