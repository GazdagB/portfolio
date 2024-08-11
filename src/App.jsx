import './App.css'
import FunFacts from './sections/FunFacts'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar'
import Video from './sections/Video'


function App() {

  return (
    <div className='App absolute bg-[#0D0F0E] flex flex-col items-center'>
    <NavBar/>

    <Hero/>
    <FunFacts/>
    <Video/>
    </div>
  )
}

export default App
