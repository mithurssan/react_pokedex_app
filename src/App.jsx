import './App.css'
import Pokedex from './components/Pokedex'
import pokemon from "./assets/pokemon"

function App() {
 
  return (
    <>
     <Pokedex pokemon={pokemon}/>
    </>
  )
}

export default App
