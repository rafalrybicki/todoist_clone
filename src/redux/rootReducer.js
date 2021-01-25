import { combineReducers } from 'redux';
import userReducer from './userReducer';
import projectsReducer from './projectsReducer';
import tasksReducer from './tasksReducer';

const rootReducer = combineReducers({
   user: userReducer,
   projects: projectsReducer,
   tasks: tasksReducer
})

export default rootReducer