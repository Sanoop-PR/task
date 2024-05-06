import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/counterSlice'


function ReduxIntegration() {
    const count = useSelector((state)=> state.counter.value)
  const dispatch =useDispatch()
  return (
    <div>
      <h3>9.Redux Integration:</h3>
        <h1>{count}</h1>
      <button onClick={()=> dispatch(increment())}>inc</button>
      <button onClick={()=> dispatch(decrement())}>dec</button>
    </div>
  )
}

export default ReduxIntegration