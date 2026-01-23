import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const nav = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("token", "example-token");

        nav("/", {replace : true});
    }
  return (
    <button onClick={handleLogin}>Login</button>
  )
}

export default Login