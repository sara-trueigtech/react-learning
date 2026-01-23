import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Login from './Login';

const ProtectedRoutes = () => {
    const token = localStorage.getItem("token");
  return (
    <>
        {token ? <Outlet/> : <Navigate to="/login" replace/>}
    </>
  )
}

export default ProtectedRoutes