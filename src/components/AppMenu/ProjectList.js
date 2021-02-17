import React from 'react';
import PropTypes from 'prop-types';

import useProjects from 'hooks/useProjects';
import { useDispatch } from 'react-redux';
import { openProjectEditor } from 'redux/actions';

import ExpandableList from './ExpandableList';
import ProjectListItem from './ProjectListItem';
import NewItemBtn from 'buttons/NewItemBtn';

function ProjectList({ closeMenu }) {
   const dispatch = useDispatch();
   const projects = useProjects();

   return (
      <ExpandableList text="Projects">
         {projects.map(project => 
            <ProjectListItem
               key={project.id}
               projectId={project.id}
               name={project.name}
               color={project.color}
               favorite={project.favorite}
               view={project.view}
               closeMenu={closeMenu}
            />
         )}
         <NewItemBtn
            text="Add project"
            width="150px"
            onClick={() => dispatch(openProjectEditor())}
         />
      </ExpandableList>
   )
}

ProjectList.propTypes = {
   closeMenu: PropTypes.func
}

export default ProjectList
