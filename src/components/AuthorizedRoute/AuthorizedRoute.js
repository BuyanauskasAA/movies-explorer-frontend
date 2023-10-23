import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

function AuthorizedRoute({ element: Component, ...props }) {
  const loggedIn = React.useContext(AuthContext);

  return !loggedIn ? <Component {...props} /> : <Navigate to="/" replace />;
}

export default AuthorizedRoute;