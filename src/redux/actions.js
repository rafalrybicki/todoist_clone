import {
   LOGIN, 
   LOGOUT,
   ADD_PROJECT,
   EDIT_PROJECT,
   DELETE_PROJECT,
   ADD_TASK,
   EDIT_TASK,
   DELETE_TASK,
   SHOW_MODAL,
   HIDE_MODAL
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

export const showModal = (componentName) => {
   return {
      type: SHOW_MODAL,
      componentName
   }
}

export const hideModal = () => {
   return {
      type: HIDE_MODAL
   }
}