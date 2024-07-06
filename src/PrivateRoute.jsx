// PrivateRoute.jsx

import React from 'react';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = true; // Replace with your authentication logic
  const history = useHistory();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : history.push('/')
      }
    />
  );
};

export default PrivateRoute;
