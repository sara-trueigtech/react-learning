import React, { useContext } from 'react'
import { userCtx } from '../context API/userCtx'

const About = () => {
  const {name, age} = useContext(userCtx);
  return (
    <div>About. My name is {name} & age {age}</div>
  )
}

export default About