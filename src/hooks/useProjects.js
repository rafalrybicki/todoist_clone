import { useSelector } from 'react-redux';

function useProjects() {
   const projects = useSelector(state => state.projects.filter(project => (project.favorite === false && project.order > 0)));

   return projects
}

export default useProjects
