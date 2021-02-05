import { useSelector } from 'react-redux';

function useActiveTasksQuantity( projectId ) {
   const tasks = useSelector(state => state.tasks.filter(task => task.projectId === projectId && task.completionDate === null))
   
   return tasks.length > 0 ? tasks.length : '';
}

export default useActiveTasksQuantity
