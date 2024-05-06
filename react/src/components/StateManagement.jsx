import React, { useState } from 'react'

function StateManagement() {

  const [count, setCount] = useState(0)

  function increase() {
    setCount(count+1)
  }
  function decrease() {
    setCount(count-1)
  }

  return (
    <div>
      <h3>2. State Management:</h3>
      <p>{count}</p>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  )
}

export default StateManagement