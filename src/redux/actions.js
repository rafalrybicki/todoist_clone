import {
   LOGIN, 
   LOGOUT,
   ADD_PROJECT,
   ADD_PROJECT_SECTION,
   UPDATE_PROJECT,
   UPDATE_PROJECT_SECTION,
   DELETE_PROJECT,
   DELETE_PROJECT_SECTION,
   ADD_TASK,
   UPDATE_TASK,
   DELETE_TASK,
   ADD_SUBTASK,
   UPDATE_SUBTASK,
   DELETE_SUBTASK,
   OPEN_PROJECT_EDITOR,
   CLOSE_PROJECT_EDITOR,
   LOAD_TASKS,
   LOAD_PROJECTS
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

export const loadProjects = (projects) => {
   return {
      type: LOAD_PROJECTS,
      projects
   }
}

export const loadTasks = (tasks) => {
   return {
      type: LOAD_TASKS,
      tasks
   }
}

export const addProject = (project) => {
   return {
      type: ADD_PROJECT,
      project
   }
}

export const addProjectSection = (projectId, sectionId, section) => {
   return {
      type: ADD_PROJECT_SECTION,
      projectId,
      sectionId,
      section
   }
}

export const updateProject = (id, fields) => {
   return {
      type: UPDATE_PROJECT,
      id,
      fields
   }
}

export const updateProjectSection = (projectId, sectionId, fields) => {
   return {
      type: UPDATE_PROJECT_SECTION,
      projectId,
      sectionId,
      fields
   }
}

export const deleteProject = (id) => {
   return {
      type: DELETE_PROJECT,
      id
   }
}

export const deleteProjectSection = (projectId, sectionId) => {
   return {
      type: DELETE_PROJECT_SECTION,
      projectId,
      sectionId
   }
}

export const addTask = (task) => {
   return {
      type: ADD_TASK,
      task
   }
}

export const updateTask = (id, fields) => {
   return {
      type: UPDATE_TASK,
      id,
      fields
   }
}

export const deleteTask = (id) => {
   return {
      type: DELETE_TASK,
      id
   }
}

export const addSubtask = (taskId, subtask) => {
   return {
      type: ADD_SUBTASK,
      taskId,
      subtask
   }
}

export const updateSubtask = (taskId, subtaskId, fields) => {
   return {
      type: UPDATE_SUBTASK,
      taskId,
      subtaskId,
      fields
   }
}

export const deleteSubtask = (taskId, subtaskId, decrementCompletedSubtasks) => {
   return {
      type: DELETE_SUBTASK,
      taskId,
      subtaskId,
      decrementCompletedSubtasks
   }
}

export const openProjectEditor = (project = null) => {
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