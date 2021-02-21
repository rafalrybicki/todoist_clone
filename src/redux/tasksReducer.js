import {
   LOAD_TASKS,
   ADD_TASK,
   UPDATE_TASK,
   DELETE_TASK,
   ADD_SUBTASK,
   UPDATE_SUBTASK,
   DELETE_SUBTASK,
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
      case ADD_SUBTASK:
         return addSubtask(state, action.taskId, action.subtask);
      case UPDATE_SUBTASK:
         return updateSubtask(state, action.taskId, action.subtaskId, action.fields);
      case DELETE_SUBTASK:
         return deleteSubtask(state, action.taskId, action.subtaskId, action.decrementCompletedSubtasks)
      case LOGOUT:
         return initialState;
      default:
         return state;
   } 
}

const updateTask = (state, id, fields) => {
   const newTasks = [...state];
   const index = newTasks.findIndex(task => task.id === id);

   newTasks[index] = {
      ...newTasks[index],
      ...fields
   };

   return newTasks;
}

const addSubtask = (state, taskId, subtask) => {
   const newTasks = [...state];
   const index = newTasks.findIndex(task => task.id === taskId);

   newTasks[index] = {
      ...newTasks[index],
      subtasks: {
         ...newTasks[index].subtasks,
         [subtask.id]: subtask
      },
      subtasksQuantity: newTasks[index].subtasksQuantity + 1
   };

   return newTasks;
}

const updateSubtask = (state, taskId, subtaskId, fields) => {
   const newTasks = [...state];
   const index = newTasks.findIndex(task => task.id === taskId);

   newTasks[index] = {
      ...newTasks[index],
      subtasks: {
         ...newTasks[index].subtasks,
         [subtaskId]: {
            ...newTasks[index].subtasks[subtaskId],
            ...fields
         }
      }
   };

   return newTasks;
}

const deleteSubtask = (state, taskId, subtaskId, decrementCompletedSubtasks) => {
   const newTasks = [...state];
   const index = newTasks.findIndex(task => task.id === taskId);
   const completedSubtasksQuantity = newTasks[index].completedSubtasksQuantity;
   const newSubtasks = {...newTasks[index].subtasks};
   delete newSubtasks[subtaskId];

   newTasks[index] = {
      ...newTasks[index],
      subtasks: newSubtasks,
      subtasksQuantity: newTasks[index].subtasksQuantity - 1,
      completedSubtasksQuantity: decrementCompletedSubtasks ? completedSubtasksQuantity - 1 : completedSubtasksQuantity
   };

   return newTasks;
}

export default projectsReducer
