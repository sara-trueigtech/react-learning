import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
  return (
    <>
        <h1>{count}</h1>
        <button onClick={() => dispatch(inc())}>incearse</button>
        <button onClick={() => dispatch(dec())}>decrease</button>
    </>
  )
}

export default Counter