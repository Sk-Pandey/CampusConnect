import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user.role) {
    return children;
  }
  return (
    <>
      <Navigate to="/dashboard" />
    </>
  );
};

export default PublicRoute;
