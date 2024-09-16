import "./App.css";
import Profile from "./components/Profile";
import FunFacts from "./sections/FunFacts";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import Video from "./sections/Video";
import Details from "./components/Details";
import Skills from "./components/Skills";
import MobileProject from "./components/MobileProject";

import { Fade } from "react-awesome-reveal";

import testBg from "./assets/video-bg.jpg";
import devfinder from "./assets/images/devfinder_project.png";
import messageSilo from "./assets/images/message-silo.png";
import Contact from "./sections/Contact";

import { motion } from "framer-motion";

import DesktopProject from "./components/DesktopProject";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App absolute bg-[#0D0F0E] flex flex-col items-center w-full">
      <NavBar />

      <Hero />
      <FunFacts />
      <Video />

      <div className="flex flex-col items-center justify-center lg:items-start lg:flex-row gap-10">
        <Fade direction="left">
          <Profile />
        </Fade>

        <div>
          
            
          <div className="text-center sm:w-[485px]">
          <Fade direction="right" cascade={true} duration={500}>
            <h2 className="text-white font-bold text-[30px] sm:text-[48.52px]">
              Get to know me
            </h2>
            <p className="u-body text-white text-center px-[24px] text-pretty mb-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              totam ipsum labore distinctio harum. Error amet dignissimos hic
              aliquid labore deleniti molestiae rem sit id dolore tempora vitae
              eveniet illo voluptatibus nesciunt, iusto sint laudantium.
            </p>
            </Fade>
          </div>
          
          
          <div className="mb-16 sm:w-[460px]">
            <Fade direction="right" cascade={true} duration={500}>
            <Details detailTitle={"AGE"} detailBody={"25 Years"} />
            <Details
              detailTitle={"JOB TITLE"}
              detailBody={"Fullstack Engineer & Graphic Designer"}
            />
            <Details detailTitle={"NATOINALITY"} detailBody={"Hungarian"} />
            <Details
              detailTitle={"LANGUAGES"}
              detailBody={"Hungarian, English, German"}
            />
            </Fade>
          </div>
        </div>
      </div>

      <section className="w-full flex flex-col items-center mb-20">
        <Fade direction="right">  
        <h2 className="u-h2 text-white text-center mb-[32px]">My Skills</h2>
        </Fade>
        <Skills />
      </section>

      <section className="w-full flex flex-col items-center px-10 text-pretty mb-8 lg:max-w-[940px]">
        <Fade direction="right" triggerOnce>
          <h2 className="u-h2 text-white">My projects</h2>
          <p className="u-body text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias
            repellat earum nobis delectus fuga reprehenderit dolorum, distinctio
            eos aliquam aperiam ducimus consectetur ipsum! Maxime alias quam
            corrupti eius, ut eveniet iure itaque sint vero!
          </p>
        </Fade>
      </section>

      <section className="w-full mb-10 sm:px-12 flex flex-col items-center">
        
        <Fade triggerOnce direction="right">
          <MobileProject bgImage={devfinder} />
          <MobileProject bgImage={testBg} />
          <MobileProject bgImage={testBg} />
          <MobileProject bgImage={testBg} />
          <MobileProject bgImage={testBg} />
        </Fade>

        <div className="hidden sm:block sm:w-[644px] lg:w-[920px]">
          
            
            <Fade triggerOnce cascade={true} direction="up" duration={500}>
              <DesktopProject
                githubUrl={"https://github.com/GazdagB/github-users-app"}
                siteUrl={"https://gazdagb.github.io/github-users-app/"}
                number={1}
                bgImage={devfinder}
              />
              <div className="h-[2px] bg-white w-full"></div>
            </Fade>

            <Fade triggerOnce cascade={true} direction="up">
              <DesktopProject
                number={2}
                bgImage={messageSilo}
                githubUrl={"https://github.com/MessageSilo/Website"}
                siteUrl={"https://www.message-silo.dev/"}
              />
              <div className="h-[2px] bg-white w-full"></div>
            </Fade>

            <Fade triggerOnce cascade={true} direction="up">
              <DesktopProject number={2} bgImage={testBg} />
              <div className="h-[2px] bg-white w-full"></div>
            </Fade>

            <Fade triggerOnce direction="up" >
            <div className="flex justify-between">
              <DesktopProject number={3} bgImage={testBg} />
              <DesktopProject number={3} bgImage={testBg} />
            </div>
            </Fade>
          

        </div>
        <Fade triggerOnce direction="up">
          <p className="underline text-white text-[20px] text-center">
            See all projects
          </p>
        </Fade>
      </section>

      <section className="bg-white h-[1000px] sm:h-auto sm:pb-96 lg:pb-32 sm:w-full flex flex-col items-center justify-start overflow-hidden">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
