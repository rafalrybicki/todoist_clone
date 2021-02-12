import useUserId from './useUserId';
import { useSelector } from 'react-redux';

function useProjects() {
   const userId = useUserId()
   const projects = useSelector(state => state.projects.filter(project => (project.ownerId === userId && project.favorite === false && project.id !== userId)));

   return projects
}

export default useProjects
