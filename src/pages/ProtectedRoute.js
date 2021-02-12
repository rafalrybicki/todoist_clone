import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ path, component }) {
   const userId = useSelector(state => state.user.id);

   if (!userId) {
      return <Redirect to="/login" />
   } 

   return (
      <Route path={path} component={component} />
   )
}

export default ProtectedRoute
