import React from 'react'
import PropTypes from 'prop-types';
import useProjectTasksQuantity from 'hooks/useProjectTasksQuantity';

import ListItem from './ListItem';
import { CircleFill } from 'react-bootstrap-icons';
import ProjectListItemMenu from './ProjectListItemMenu';

function ProjectListItem({ projectId, name, color, favorite, view, closeMenu}) {
   const quantity = useProjectTasksQuantity(projectId);
   
   return (
      <ListItem
         name={`${name} ${quantity}`}
         path={'/project/' + projectId}
         closeMenu={closeMenu}
         icon={
            <CircleFill
               color={color}
               className="project-icon"
            />
         }
         menu={
            <ProjectListItemMenu
               projectId={projectId}
               name={name}
               color={color}
               favorite={favorite}
               view={view}
            />
         }
      />
   )
}

ProjectListItem.propTypes = {
   closeMenu: PropTypes.func
}

export default ProjectListItem
