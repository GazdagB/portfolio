import './App.css'
import Profile from './components/Profile'
import FunFacts from './sections/FunFacts'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar'
import Video from './sections/Video'
import Details from './components/Details'
import Skills from './components/Skills'
import MobileProject from './components/MobileProject'

import testBg from './assets/video-bg.jpg'
import Contact from './sections/Contact'




import DesktopProject from './components/DesktopProject'
import Footer from './sections/Footer'





function App() {

  return (
    <div className='App absolute bg-[#0D0F0E] flex flex-col items-center w-full'>
    <NavBar/>

    <Hero/>
    <FunFacts/>
    <Video/>

    <div className='flex flex-col items-center justify-center lg:items-start lg:flex-row gap-10'>
      <Profile/>
      <div>
        <div className='text-center sm:w-[485px]'>
          <h2 className='text-white font-bold text-[30px] sm:text-[48.52px]'>Get to know me</h2>
          <p className='u-body text-white text-center px-[24px] text-pretty mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod totam ipsum labore distinctio harum. Error amet dignissimos hic aliquid labore deleniti molestiae rem sit id dolore tempora vitae eveniet illo voluptatibus nesciunt, iusto sint laudantium.</p>
        </div>
            <div className="mb-16 sm:w-[460px]">
        <Details detailTitle={"AGE"} detailBody={"25 Years"}/>
        <Details detailTitle={"JOB TITLE"} detailBody={"Fullstack Engineer & Graphic Designer"}/>
        <Details detailTitle={"NATOINALITY"} detailBody={"Hungarian"}/>
        <Details detailTitle={"LANGUAGES"} detailBody={"Hungarian, English, German"}/>
            </div>
      </div>
    </div>


    <section className='w-full flex flex-col items-center mb-20'>
      <h2 className='u-h2 text-white text-center mb-[32px]'>My Skills</h2>
      <Skills/>
    </section>
    
    <section className="w-full flex flex-col items-center px-10 text-pretty mb-8">
      <h2 className="u-h2 text-white">My projects</h2>
      <p className="u-body text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias repellat earum nobis delectus fuga reprehenderit dolorum, distinctio eos aliquam aperiam ducimus consectetur ipsum! Maxime alias quam corrupti eius, ut eveniet iure itaque sint vero!</p>
    </section>

    <section className='w-full mb-10 sm:px-12 flex flex-col items-center'>
      <MobileProject bgImage={testBg} />
      <MobileProject bgImage={testBg} />
      <MobileProject bgImage={testBg} />
      <MobileProject bgImage={testBg} />
      <MobileProject bgImage={testBg} />

      
        <div className='hidden sm:block sm:w-[644px] lg:w-[920px]'>
          <DesktopProject number={1} bgImage={testBg}/>
          <div className='h-[2px] bg-white w-full'></div>
          <DesktopProject number={2} bgImage={testBg}/>
          <div className='h-[2px] bg-white w-full'></div>
          <DesktopProject number={2} bgImage={testBg}/>
          <div className='h-[2px] bg-white w-full'></div>
          <div className='flex justify-between'>
            <DesktopProject number={3} bgImage={testBg}/>
            <DesktopProject number={3} bgImage={testBg}/>
          </div>
          
        </div>
        <p className='underline text-white text-[20px] text-center'>See all projects</p>
        
      
    </section>

    <section className='bg-white h-[1000px] sm:h-auto sm:pb-96 sm:w-full flex flex-col items-center justify-start overflow-hidden'>
    <Contact/>
    
    </section>


    <Footer/>

    </div>
  )
}

export default App
