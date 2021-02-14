import {
   LOAD_PROJECTS,
   LOAD_TASKS,
   LOGOUT
} from './actionTypes';

const initialState = {
   tasks: false,
   projects: false,
}

function userReducer(state = initialState, action) {
   switch (action.type) {
      case LOAD_PROJECTS:
         return {
            ...state,
            projects: true
         };
      case LOAD_TASKS:
         return {
            ...state,
            tasks: true
         };
      case LOGOUT:
         return initialState
      default:
         return state;
   }   
}

export default userReducer