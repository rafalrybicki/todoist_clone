import { useSelector } from "react-redux"

import { getBeginingOfTheDay, getEndOfTheDay } from 'utils';

function useTodayTasks() {
   const beginingOfTheDay = getBeginingOfTheDay();
   const endOfTheDay = getEndOfTheDay();
   const tasks = useSelector(state => state.tasks.filter(task => task.targetDate >= beginingOfTheDay && task.targetDate <= endOfTheDay));

   return tasks;
}

export default useTodayTasks
