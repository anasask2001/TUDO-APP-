import React from 'react'
import Component2 from './Component2'

function Component1({name}) {
  return (
    <div>
      <h1>{name}</h1>
      <Component2 name={name}/>
    </div>
  )
}

export default Component1
