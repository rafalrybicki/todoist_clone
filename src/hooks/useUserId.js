import { useSelector } from 'react-redux';

function useProjects() {
   const userId = useSelector(state => state.user.id);

   return userId
}

export default useProjects
