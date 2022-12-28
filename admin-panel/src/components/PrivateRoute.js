import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "../store/UserContext";

const PrivateRoute = () => {
  const { user } = useGlobalContext();

  if (!user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
