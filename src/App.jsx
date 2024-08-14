import './App.css'
import Profile from './components/Profile'
import FunFacts from './sections/FunFacts'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar'
import Video from './sections/Video'
import Details from './components/Details'
import Skills from './components/Skills'


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

    <div className="mb-16">
      <Details detailTitle={"AGE"} detailBody={"25 Years"}/>
      <Details detailTitle={"JOB TITLE"} detailBody={"Fullstack Engineer & Graphic Designer"}/>
      <Details detailTitle={"NATOINALITY"} detailBody={"Hungarian"}/>
      <Details detailTitle={"LANGUAGES"} detailBody={"Hungarian, English, German"}/>
    </div>

    <section className='w-full flex flex-col items-center mb-20'>
      <h2 className='u-h2 text-white text-center mb-[32px]'>My Skills</h2>
      <Skills/>
    </section>
    </div>
  )
}

export default App
