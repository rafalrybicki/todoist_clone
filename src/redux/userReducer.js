import {
   LOGIN,
   LOGOUT
} from './actionTypes';

const initialState = JSON.parse(localStorage.getItem('user')) || {};
console.log('INITIAL USER = ' + JSON.stringify(initialState))

function userReducer(state = initialState, action) {
   switch (action.type) {
      case LOGIN:
         return {
            ...action.user
         };
      case LOGOUT:
         return {}
      default:
         return state;
   }   
}

export default userReducer