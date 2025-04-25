import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem("email");

  return isLoggedIn === "true" ? children : <Navigate to="/unauthorized" />;
};

export default PrivateRoute;
