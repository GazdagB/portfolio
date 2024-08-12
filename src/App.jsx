import './App.css'
import Profile from './components/Profile'
import FunFacts from './sections/FunFacts'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar'
import Video from './sections/Video'


function App() {

  return (
    <div className='App absolute bg-[#0D0F0E] flex flex-col items-center w-full'>
    <NavBar/>

    <Hero/>
    <FunFacts/>
    <Video/>
    <Profile/>

    <h2 className='text-white u-h2 '>Get to know me</h2>
    <p className='u-body text-white text-center px-[24px] text-pretty mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod totam ipsum labore distinctio harum. Error amet dignissimos hic aliquid labore deleniti molestiae rem sit id dolore tempora vitae eveniet illo voluptatibus nesciunt, iusto sint laudantium.</p>


    </div>
  )
}

export default App
