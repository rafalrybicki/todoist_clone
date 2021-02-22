import {
   LOAD_PROJECTS,
   ADD_PROJECT,
   ADD_PROJECT_SECTION,
   UPDATE_PROJECT,
   UPDATE_PROJECT_SECTION,
   DELETE_PROJECT,
   DELETE_PROJECT_SECTION,
   LOGOUT
} from './actionTypes';

const initialState = [];

function projectsReducer(state = initialState, action) {
   switch (action.type) {
      case LOAD_PROJECTS:
         return action.projects.sort((a,b) => a.order - b.order);
      case ADD_PROJECT:
         return [
            ...state,
            action.project
         ].sort((a,b) => a.order - b.order);
      case ADD_PROJECT_SECTION:
         return addProjectSection(state, action.projectId, action.sectionId, action.section);
      case UPDATE_PROJECT:
         return state.map(project => project.id === action.id ? {...project, ...action.fields} : project);
      case UPDATE_PROJECT_SECTION:
         return updateProjectSection(state, action.projectId, action.sectionId, action.fields);
      case DELETE_PROJECT:
         return state.filter(project => project.id !== action.id);
      case DELETE_PROJECT_SECTION:
         return deleteProjectSection(state, action.projectId, action.sectionId)
      case LOGOUT:
         return [];
      default:
         return state;
   } 
}

const addProjectSection = (projects, projectId, sectionId, section) => {
   const newProjects = [...projects];
   const index = newProjects.findIndex(project => project.id === projectId);

   newProjects[index] = {
      ...newProjects[index],
      sections: {
         ...newProjects[index].sections,
         [sectionId]: section
      }
   }

   return newProjects
}

const updateProjectSection = (projects, projectId, sectionId, fields) => {
   const newProjects = [...projects];
   const index = newProjects.findIndex(project => project.id === projectId);

   newProjects[index] = {
      ...newProjects[index],
      sections: {
         ...newProjects[index].sections,
         [sectionId]: {
            ...newProjects[index].sections[sectionId],
            ...fields
         }
      }
   }

   return newProjects
}

const deleteProjectSection = (projects, projectId, sectionId) => {
   const newProjects = [...projects];
   const index = newProjects.findIndex(project => project.id === projectId);
   const newSections = {...newProjects[index].sections};
   delete newSections[sectionId];

   newProjects[index] = {
      ...newProjects[index],
      sections: newSections
   }

   return newProjects
} 

export default projectsReducer
