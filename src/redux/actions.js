import {
   LOGIN, 
   LOGOUT,
   ADD_PROJECT,
   EDIT_PROJECT,
   DELETE_PROJECT,
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