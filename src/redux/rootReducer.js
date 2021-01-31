import { combineReducers } from 'redux';
import userReducer from './userReducer';
import projectsReducer from './projectsReducer';
import tasksReducer from './tasksReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
   user: userReducer,
   projects: projectsReducer,
   tasks: tasksReducer,
   modal: modalReducer
})

export default rootReducer