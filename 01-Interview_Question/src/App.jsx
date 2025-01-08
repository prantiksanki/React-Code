import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function addValue(value) {
    setCount((prevCount) => prevCount + value)
    setCount((prevCount) => prevCount + value)
    setCount((prevCount) => prevCount + value)
    setCount((prevCount) => prevCount + value)
  }

  function removeValue(value) {
    setCount((prevCount) => prevCount - value)
    setCount((prevCount) => prevCount - value)
    setCount((prevCount) => prevCount - value)
    setCount((prevCount) => prevCount - value)
  }

  return (
    <>
        <h1>{count}</h1>
      <button onClick={() => addValue(1)}> Add value</button>
      <button onClick={() => removeValue(1)}> Remove value</button>
    </>
  )
}

export default App
 