import React from 'react';
import PropTypes from 'prop-types';

import useProjects from 'hooks/useProjects';

import ExpandableList from './ExpandableList';
import ProjectListItem from './ProjectListItem';
import NewItemBtn from 'buttons/NewItemBtn';

function ProjectList({ closeMenu, openProjectEditor }) {
   const projects = useProjects()

   return (
      <ExpandableList text="Projects">
         {projects.map(project => 
            <ProjectListItem
               key={project.id}
               projectId={project.id}
               name={project.name}
               color={project.color}
               onClick={closeMenu}
            />
         )}
         <NewItemBtn
            text="Add project"
            width="110px"
            onClick={openProjectEditor}
         />
      </ExpandableList>
   )
}

ProjectList.propTypes = {
   closeMenu: PropTypes.func,
   openProjectEditor: PropTypes.func.isRequired,
}

export default ProjectList
