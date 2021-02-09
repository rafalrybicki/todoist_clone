import React from 'react'

import useProjectTasksQuantity from 'hooks/useProjectTasksQuantity';

import ListItem from './ListItem';
import { CircleFill } from 'react-bootstrap-icons';

function ProjectListItem({ projectId, name, color, onClick}) {
   const quantity = useProjectTasksQuantity(projectId);

   return (
      <ListItem
         name={`${name} ${quantity}`}
         path={'/project/' + projectId}
         onClick={onClick}
         options
      >
         <CircleFill
            color={color}
            className="project-icon"
         />
      </ListItem>
   )
}

export default ProjectListItem
