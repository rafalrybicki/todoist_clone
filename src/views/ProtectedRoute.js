import React from 'react';
import { auth } from '../firebase'; 
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ path, component }) {
   if (!auth.currentUser) {
      return <Redirect to="/login" />
   }
   return (
      <Route path={path} component={component} />
   )
}

export default ProtectedRoute
