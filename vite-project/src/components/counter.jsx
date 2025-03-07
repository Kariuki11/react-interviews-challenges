// #3 Create a counter using useState that increases and decreases when buttons are clicked.
// - Implement a way to use useState.
// - Implement a way to increase the counter.
// - Implement a way to decrease the counter.
// - Implement a way to use buttons to increase and decrease the counter.

import React from 'react'
import { useState } from 'react'

const Counter = () => {

  const [counter, setCounter] = useState(0)

  const positive = () => {
    setCounter(counter + 1)
  }
  
  const negative = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h1>Welcome to our Counting numbers site</h1>
      <h2>Counter: {counter}</h2>
      <div>
        <button onClick={positive}>+</button>
      </div>
      <div>
        <button onClick={negative}>-</button>
      </div>
    </div>
  )
}

export default Counter
