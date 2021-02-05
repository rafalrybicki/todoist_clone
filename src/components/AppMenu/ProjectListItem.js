import React from 'react'

import useActiveTasksQuantity from 'hooks/useActiveTasksQuantity';

import ListItem from './ListItem';
import { CircleFill } from 'react-bootstrap-icons';

function ProjectListItem({ projectId, name, color, onClick}) {
   const quantity = useActiveTasksQuantity(projectId);

   return (
      <ListItem
         name={`${name} ${quantity}`}
         path={'/project/' + projectId}
         onClick={onClick}
      >
         <CircleFill
            color={color}
            className="project-icon"
         />
      </ListItem>
   )
}

export default ProjectListItem
