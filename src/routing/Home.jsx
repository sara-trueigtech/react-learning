import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    Home
    <Link to="/about"><button>about</button></Link>
    <Link to="/services"><button>services</button></Link>
    </>
  )
}

export default Home