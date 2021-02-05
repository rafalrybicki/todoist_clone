import React from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { openModal } from 'redux/actions';

import ExpandableList from './ExpandableList';
import ProjectListItem from './ProjectListItem';
import NewItemBtn from 'buttons/NewItemBtn';

function ProjectList({ isMobile, closeMenu }) {
   const projects = useSelector(state => state.projects.filter(project => (project.favorite === false && project.order > 0)))
   const dispatch = useDispatch();

   return (
      <ExpandableList text="projects">
         {projects.map(project => 
            <ProjectListItem
               key={project.id}
               projectId={project.id}
               name={project.name}
               color={project.color}
               onClick={isMobile ? closeMenu : null}
            />
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
