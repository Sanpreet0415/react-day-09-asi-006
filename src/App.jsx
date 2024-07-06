// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import HomePage from './HomePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginForm} />
        <Route path="/register" component={RegistrationForm} />
        <PrivateRoute path="/home" component={HomePage} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
