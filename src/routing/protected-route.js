import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const time = parseFloat(localStorage.getItem('expiration_time')) || 0;
  const reroute = time <= (Date.now() / 1000);
  return (
    <Route render={() => (
      reroute ? <Redirect to="/login" /> : <Route {...props} />
    )}
    />
  );
};

export default ProtectedRoute;
