import {
   LOGIN, 
   LOGOUT,
   ADD_PROJECT,
   EDIT_PROJECT,
   DELETE_PROJECT,
   ADD_TASK,
   EDIT_TASK,
   DELETE_TASK,
   OPEN_PROJECT_EDITOR,
   CLOSE_PROJECT_EDITOR
} from './actionTypes';

export const login = (user) => {
   localStorage.setItem('user', JSON.stringify(user))
   return {
      type: LOGIN,
      user
   }
}

export const logout = () => {
   localStorage.removeItem('user')
   return { type: LOGOUT }
}

export const addProject = (project) => {
   return {
      type: ADD_PROJECT,
      project
   }
}

export const editProject = (project) => {
   return {
      type: EDIT_PROJECT,
      project
   }
}

export const deleteProject = (id) => {
   return {
      type: DELETE_PROJECT,
      id
   }
}

export const addTask = (task) => {
   return {
      type: ADD_TASK,
      task
   }
}

export const editTask = (task) => {
   return {
      type: EDIT_TASK,
      task
   }
}

export const deleteTask = (id) => {
   return {
      type: DELETE_TASK,
      id
   }
}

export const openProjectEditor = (project = {}) => {
   return {
      type: OPEN_PROJECT_EDITOR,
      project
   }
}

export const closeProjectEditor = () => {
   return {
      type: CLOSE_PROJECT_EDITOR
   }
}