import React, { useContext } from 'react'
import { userCtx } from '../context API/userCtx'

const Services = () => {
  const {address} = useContext(userCtx);
  return (
    <div>Services. address = {address}</div>
  )
}

export default Services