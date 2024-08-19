import gbLogo from "../assets/gb-logo-text.svg"
import "./NavBar.css"
import { animated, useSpring } from '@react-spring/web'
import { useState } from "react"

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
    <nav className='flex w-full justify-between px-10 py-5 items-center fixed bg-white z-10'>
      <img className="h-[35px] sm:h-[60px]" src={gbLogo} alt=""/>
      <div onClick={() => setisVisible(prev => !prev)} className="hamburger h-[34px] w-[34px] items-center justify-center sm:h-[50px] sm:w-[50px] sm:gap-2">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>

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