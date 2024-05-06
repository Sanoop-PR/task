import React from 'react'

function SimpleButton() {
  function sayHello() {
    alert('hello')
  }
  return (
    <>
      <h3>1. Basic Component Creation:</h3>
      <button onClick={sayHello}>button</button>
    </>
  )
}

export default SimpleButton