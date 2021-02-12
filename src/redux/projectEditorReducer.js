import {
   OPEN_PROJECT_EDITOR,
   CLOSE_PROJECT_EDITOR,
   LOGOUT
} from './actionTypes';

const initialState = {
   isOpen: false,
   project: {}
}

function projectsReducer(state = initialState, action) {
   switch (action.type) {
      case OPEN_PROJECT_EDITOR:
         return {
            isOpen: true,
            project: action.project
         }
      case CLOSE_PROJECT_EDITOR:
         return {
            isOpen: false,
            project: {}
         }
      case LOGOUT:
         return initialState;
      default:
         return state;
   } 
}

export default projectsReducer
