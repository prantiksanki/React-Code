import { useState } from 'react'

function App() {

  let [counter , setCounter] = useState(0) ; 
  let [loop , setLoop] = useState(100) ; 
  const MIN_LIMIT = 0 ; 
  const MAX_LIMIT = 20 ;  

  function addValue()
  {
    if(counter < MAX_LIMIT)
    {
      setCounter(counter+1) ;
      setLoop(loop+1) ;
    }
  
  }

  function removeValue()
  {
    if(counter > MIN_LIMIT)
    {
      setCounter(counter-1) ; 
      setLoop(loop-1);
    }
    
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value : {counter}</h2>
      <h3>Loop value : {loop}</h3>

      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
