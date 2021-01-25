import {
   ADD_PROJECT,
   EDIT_PROJECT,
   DELETE_PROJECT
} from './actionTypes';

const initialState = [];

function projectsReducer(state = initialState, action) {
   switch (action.type) {
      case ADD_PROJECT:
         return [
            ...state,
            action.project
         ];
      case EDIT_PROJECT:
         return state.map(project => project.id !== action.project.id ? project : action.project);
      case DELETE_PROJECT:
         return state.filter(project => project.id !== action.id);
      default:
         return state;
   } 
}

export default projectsReducer
