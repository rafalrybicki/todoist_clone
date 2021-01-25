import React from 'react';
import PropTypes from 'prop-types';

// import useFirestoreCollection from '../../hooks/useFirestoreCollection';

import ExpandableList from './ExpandableList';
import ListItem from './ListItem';
import { CircleFill } from 'react-bootstrap-icons';
import NewItemBtn from '../common/buttons/NewItemBtn';
// import { useSelector } from 'react-redux';

function ProjectList({ isMobile, closeMenu }) {
   // const userId = useSelector(state => state.user.id )
   // const projects = useFirestoreCollection('projects', 'ownerId', '==', userId);

   // projects.filter(project => project.order !== 0)
   const projects = []

   return (
      <ExpandableList text="projects">
         {projects.filter(project => project.order !== 0).map(project => 
            <ListItem
               key={project.id}
               text={project.name}
               path={'/project/' + project.id}
               onClick={isMobile ? closeMenu : undefined}
            >
               <CircleFill
                  color={project.color}
                  className="project-icon"
               />
            </ListItem>
         )}
         <NewItemBtn
            text="Add project"
            width="110px"
            // onClick={() => {showProjectEditor(true)}}
         />
      </ExpandableList>
   )
}

ProjectList.propTypes = {
   isMobile: PropTypes.bool.isRequired,
   closeMenu: PropTypes.func.isRequired
}

export default ProjectList
