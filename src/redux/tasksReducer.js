import {
   LOAD_TASKS,
   ADD_TASK,
   UPDATE_TASK,
   DELETE_TASK,
   LOGOUT
} from './actionTypes';

const initialState = [];

function projectsReducer(state = initialState, action) {
   switch (action.type) {
      case LOAD_TASKS:
         return action.tasks
      case ADD_TASK:
         return [
            ...state,
            action.task
         ];
      case UPDATE_TASK:
         return updateTask(state, action.id, action.fields);
      case DELETE_TASK:
         return state.filter(task => task.id !== action.id);
      case LOGOUT:
         return initialState;
      default:
         return state;
   } 
}

const updateTask = (tasks, id, fields) => {
   const newTasks = [...tasks];
   const index = newTasks.findIndex(task => task.id === id);

   newTasks[index] = {
      ...newTasks[index],
      ...fields
   };

   return newTasks;
}

export default projectsReducer
