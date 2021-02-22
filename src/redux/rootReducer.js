import { combineReducers } from 'redux';
import userReducer from './userReducer';
import projectsReducer from './projectsReducer';
import tasksReducer from './tasksReducer';
import projectEditorModal from './projectEditorReducer';
import loaderReducer from './loaderReducer';

const rootReducer = combineReducers({
   user: userReducer,
   projects: projectsReducer,
   tasks: tasksReducer,
   projectEditor: projectEditorModal,
   loader: loaderReducer
})

export default rootReducer