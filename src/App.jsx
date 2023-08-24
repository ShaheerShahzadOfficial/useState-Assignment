import { useState } from 'react'
import openLight from './assets/light-bulb.png'
import closeLight from './assets/light-bulb-close.png'
import './App.css'

function App() {
  const [count, setCount] = useState(22)
  const [ON, setON] = useState(true)

  return (
    <>
      <div>
   
        { ON === true ?   <img src={openLight} className="logo" alt="Open Light" />
        :
          <img src={closeLight} className="logo" alt="Close Light" />}
        
      </div>

      <button onClick={() => setON(!ON)}>
        { ON ? "Close":"Open" }
        </button>

      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          -
        </button>
        <p>
         <code>{count}°C </code>
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
         +
        </button>

      
      </div>

    </>
  )
}

export default App
