import React from 'react'
import { userCtx } from "./userCtx.js"

const UserProvider = ({children}) => {
    const name = "sara";
    const age = 21;
    const address = "indore";
  return (
    <>
        <userCtx.Provider value = {{name, age, address}}>
            {children}
        </userCtx.Provider>
    
    </>
  )
}

export default UserProvider