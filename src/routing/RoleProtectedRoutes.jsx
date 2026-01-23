import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RoleProtectedRoutes = ({ allowed }) => {
  const role = localStorage.getItem("role");
  return(
    <>
  {
    !allowed.includes(role) ? (
      <Navigate to="/unauthorised" replace />
    ) : (
      <Outlet />
    )
  }
  </>
)
};

export default RoleProtectedRoutes;
