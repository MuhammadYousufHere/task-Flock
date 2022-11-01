import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
const PrivateRouete = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <Navigate to='/' />;
  }
  return (
    <Route
      {...rest}
      element={element}
    />
  );
};

export default PrivateRouete;
