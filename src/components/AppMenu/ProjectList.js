import React from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { openModal } from 'redux/actions';

import ExpandableList from './ExpandableList';
import ListItem from './ListItem';
import { CircleFill } from 'react-bootstrap-icons';
import NewItemBtn from 'buttons/NewItemBtn';

function ProjectList({ isMobile, closeMenu }) {
   const projects = useSelector(state => state.projects.filter(project => (project.favorite === false && project.order > 0)).sort((a, b) => a.order - b.order))
   const dispatch = useDispatch();

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
            onClick={() => dispatch(openModal('project'))}
         />
      </ExpandableList>
   )
}

ProjectList.propTypes = {
   isMobile: PropTypes.bool.isRequired,
   closeMenu: PropTypes.func.isRequired
}

export default ProjectList
