import { useState } from 'react'
// import Pokecard from './Pokecard'
import Pokedex from './Pokedex'





import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Pokedex />      
      
    </>
  )
}

export default App
