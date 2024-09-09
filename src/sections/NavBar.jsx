import gbLogo from "../assets/gb-logo-text.svg"
import "./NavBar.css"
import { animated, useSpring } from '@react-spring/web'
import { useState } from "react"
import Button from "../components/Button"
import { motion } from "framer-motion"

import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const NavBar = () => {

  const [isVisible, setisVisible] = useState(false)

  const slideInRight = useSpring({
    from: {
      transform: 'translateY(-100%)'
    },
    to: {
      transform: isVisible ? 'translateY(0%)' : 'translateY(-100%)'
    }
  })

  return (
    <>
    <motion.nav className='flex w-full lg:w-[90%] lg:mt-5 lg:h-[70px] justify-between px-10 py-5 lg:py-0 lg:rounded-full lg:border-black items-center fixed bg-white z-10 lg:border-[2px]' initial={{y: -200}} animate={{y: 0}} transition={{duration: 1.2}}>
      <img className="h-[35px] sm:h-[60px] " src={gbLogo} alt=""/>
      <div  onClick={() => setisVisible(prev => !prev)} className="hamburger h-[34px] w-[34px] items-center justify-center sm:h-[50px] sm:w-[50px] sm:gap-2 lg:hidden">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className=" hidden lg:flex gap-[26px]">
        <ul className="text-[18px] gap-[26px] hidden lg:flex">
          <li>Home</li>
          <li>About</li>
          <li>My Work</li>
          <li>Skills</li>
          <li>Blog</li>
        </ul>
        <Button bgColor="#164EF5" classes={"text-white py-1 px-5 rounded-full"}>Download CV</Button>
      </div>
    </motion.nav>

    <animated.div className={"bg-white  h-screen w-full fixed flex flex-col items-center justify-center gap-16"} style={slideInRight}>
        <ul className="text-black text-[22px] text-center flex flex-col gap-5 font-medium">
          <li>Home</li>
          <li>My Work</li>
          <li>About</li>
          <li>Skills</li>
        </ul>

        <div className='text-[25px] flex gap-2'>
          <FaGithub />
          <RiInstagramFill />
          <FaFacebook />
          <FaLinkedin />
        </div>

    </animated.div>
    </>
  )
}

export default NavBar