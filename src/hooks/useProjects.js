import useUserId from './useUserId';
import { useSelector } from 'react-redux';

function useProjects() {
   const inboxId = useUserId()
   const projects = useSelector(state => state.projects.filter(project => (project.favorite === false && project.id !== inboxId)));

   return projects
}

export default useProjects
