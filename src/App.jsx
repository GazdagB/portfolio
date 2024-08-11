import './App.css'
import FunFacts from './sections/FunFacts'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar'

function App() {

  return (
    <div className='App absolute bg-[#0D0F0E]'>
    <NavBar/>

    <Hero/>
    <FunFacts/>
    </div>
  )
}

export default App
