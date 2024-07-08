import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)


  const addValue = () => {
    counter++
    setCounter(counter)
  }
  const decValue= () =>{
    counter--;
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai aur codec</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Increase Value</button>
      <br></br>
      <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
