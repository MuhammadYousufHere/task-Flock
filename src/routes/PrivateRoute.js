import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
  // const { isAuthenticated } = useAuth0();
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
