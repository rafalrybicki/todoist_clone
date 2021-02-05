import useOverdueTasks from './useOverdueTasks';
import useTodayTasks from './useTodayTasks';

function useTodayTasksQuantity() {
   const overdueTasksQuantity = useOverdueTasks().length;
   const todayTasksQuantity = useTodayTasks().length;
   const quantity = overdueTasksQuantity + todayTasksQuantity;

   return quantity + todayTasksQuantity > 0 ? quantity : '';
}

export default useTodayTasksQuantity
