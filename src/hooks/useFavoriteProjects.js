import { useSelector } from 'react-redux';

function useFovoriteProjects() {
   const projects = useSelector(state => state.projects.filter(project => project.favorite));

   return projects
}

export default useFovoriteProjects
