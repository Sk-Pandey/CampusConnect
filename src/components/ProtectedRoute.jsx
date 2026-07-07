import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user.roll) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
