import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const nav = useNavigate();

    const handleAdminLogin = () => {
        localStorage.setItem("token", "admin-token");
        localStorage.setItem("role", "admin");
        nav("/", {replace : true});
    }
    const handleUserLogin = () => {
        localStorage.setItem("token", "user-token");
        localStorage.setItem("role", "user");
        nav("/", {replace : true});
    }
  return (
    <>
    <button onClick={handleAdminLogin}>Admin Login</button>
    <button onClick={handleUserLogin}>User Login</button>
    </>
  )
}

export default Login