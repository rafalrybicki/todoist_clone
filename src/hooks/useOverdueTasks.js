import { useSelector } from "react-redux"

import { getBeginingOfTheDay } from 'utils';

function useOverdueTasks() {
   const beginingOfTheDay = getBeginingOfTheDay();
   const tasks = useSelector(state => state.tasks.filter(task => task.targetDate && task.targetDate < beginingOfTheDay));

   return tasks;
}

export default useOverdueTasks
