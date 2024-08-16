import './App.css'
import Profile from './components/Profile'
import FunFacts from './sections/FunFacts'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar'
import Video from './sections/Video'
import Details from './components/Details'
import Skills from './components/Skills'
import Project from './components/Project'

import testBg from './assets/video-bg.jpg'
import Contact from './sections/Contact'

import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";





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
    
    <section className="w-full flex flex-col items-center px-10 text-pretty">
      <h2 className="u-h2 text-white">My projects</h2>
      <p className="u-body text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias repellat earum nobis delectus fuga reprehenderit dolorum, distinctio eos aliquam aperiam ducimus consectetur ipsum! Maxime alias quam corrupti eius, ut eveniet iure itaque sint vero!</p>
    </section>

    <section className='w-full mb-10'>
      <Project bgImage={testBg} />
      <Project bgImage={testBg} />
      <Project bgImage={testBg} />
      <Project bgImage={testBg} />
      <Project bgImage={testBg} />
      <p className='underline text-white text-[20px] text-center'>See all projects</p>
    </section>

    <section className='bg-white h-[1000px] flex flex-col justify-center'>
    <Contact/>
    <div className='bg-[#164EF5] w-full h-[224px] px-10 py-8 text-white flex flex-col justify-center'>
                <h3 className='text-[22px] font-black'>Contact me</h3>
                <div className='flex flex-col'>
                    <a className='flex text-[20px] items-center gap-3 mb-1' href="mailto:gazdagbal@gmail.com"> <MdOutlineMailOutline className='text-[20px] mb-1' />  gazdagbal@gmail.com</a>
                    <a className='flex text-[20px] items-center gap-3 mb-6' href="tel:+4915222348975"> <FaPhoneAlt className='text-[16px] mb-1'/> +4915222348975</a>
                    <div className='text-[25px] flex gap-2'>
                    <FaGithub />
                    <RiInstagramFill />
                    <FaFacebook />
                    <FaLinkedin />
                    </div>
                </div>
    </div>
    </section>

    </div>
  )
}

export default App
