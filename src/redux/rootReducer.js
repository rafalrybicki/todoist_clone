import { combineReducers } from 'redux';
import userReducer from './userReducer.js';
import projectsReducer from './projectsReducer.js';

const rootReducer = combineReducers({
   user: userReducer,
   projects: projectsReducer
})

export default rootReducer