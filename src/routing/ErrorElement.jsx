import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
    const err = useRouteError();
  return (
    <div>
        <h1>error occurred..</h1>
        <p>{err.statusText || err.message}</p>
    </div>
  )
}

export default ErrorElement