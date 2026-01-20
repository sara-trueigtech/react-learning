import React from 'react'

const MyButton = () => {
  function handleClick() {
    alert('You clicked me!');
  }
  return (
    <button onClick={handleClick}>MyButton</button>
  )
}

export default MyButton