import React from 'react';
import PropTypes from 'prop-types';

import useFirestoreCollection from '../../hooks/useFirestoreCollection';
import { auth } from '../../firebase';

import ExpandableList from './ExpandableList';
import ListItem from './ListItem';
import { CircleFill } from 'react-bootstrap-icons';
import NewItemBtn from '../common/buttons/NewItemBtn';

function ProjectList({ isMobile, closeMenu }) {
   const projects = useFirestoreCollection('projects', ['ownerId', '==', auth.currentUser.uid]);

   return (
      <ExpandableList text="projects">
         {projects.map(project => 
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
