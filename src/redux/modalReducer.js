import {
   OPEN_MODAL,
   HIDE_MODAL
} from './actionTypes';

function projectsReducer(state = null, action) {
   switch (action.type) {
      case OPEN_MODAL:
         return action.componentName
      case HIDE_MODAL:
         return null;
      default:
         return state;
   } 
}

export default projectsReducer
