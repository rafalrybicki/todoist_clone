import {
   ADD_TASK,
   EDIT_TASK,
   DELETE_TASK,
   LOGOUT
} from './actionTypes';

const initialState = [];

function projectsReducer(state = initialState, action) {
   switch (action.type) {
      case ADD_TASK:
         return [
            ...state,
            action.task
         ];
      case EDIT_TASK:
         return state.map(task => task.id !== action.task.id ? task : action.task);
      case DELETE_TASK:
         return state.filter(task => task.id !== action.id);
      case LOGOUT:
         return [];
      default:
         return state;
   } 
}

export default projectsReducer
