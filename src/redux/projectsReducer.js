import {
   LOAD_PROJECTS,
   ADD_PROJECT,
   EDIT_PROJECT,
   DELETE_PROJECT,
   LOGOUT
} from './actionTypes';

const initialState = [];

function projectsReducer(state = initialState, action) {
   switch (action.type) {
      case LOAD_PROJECTS:
         return action.projects
      case ADD_PROJECT:
         return [
            ...state,
            action.project
         ].sort((a,b) => a.order - b.order);
      case EDIT_PROJECT:
         return state.map(project => project.id !== action.project.id ? project : action.project);
      case DELETE_PROJECT:
         return state.filter(project => project.id !== action.id);
      case LOGOUT:
         return [];
      default:
         return state;
   } 
}

export default projectsReducer
