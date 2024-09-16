import { useState } from "react";
import { animated, useSpring } from '@react-spring/web';
import { motion } from "framer-motion";
import Tab from "../components/Tab";
import Cursor from "../components/Cursor.jsx";
import Button from "../components/Button";
import gbLogo from "../assets/gb-logo-text.svg";

const NavBar = () => {
  const [isVisible, setisVisible] = useState(false);
  const [position, setPosition] = useState({
    left: null,
    width: 100,
    opacity: 0
  });
  
  // State to track the selected tab
  const [selected, setSelected] = useState({
    width: 100,
    opacity: 0,
    left: null
  });

  const slideInRight = useSpring({
    from: { transform: 'translateY(-100%)' },
    to: { transform: isVisible ? 'translateY(0%)' : 'translateY(-100%)' }
  });

  return (
    <>
      <motion.nav className='flex w-full lg:w-[90%] lg:mt-5 lg:h-[70px] justify-between px-10 py-5 lg:py-0 lg:rounded-full lg:border-black items-center fixed bg-white z-10 lg:border-[2px]' initial={{ y: -200 }} animate={{ y: 0 }} transition={{ duration: 1.2 }}>
        <img className="h-[35px] sm:h-[60px]" src={gbLogo} alt="" />
        <div onClick={() => setisVisible(prev => !prev)} className="hamburger h-[34px] w-[34px] items-center justify-center sm:h-[50px] sm:w-[50px] sm:gap-2 lg:hidden">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className="hidden lg:flex gap-[26px]">
          <ul className="text-[18px] hidden items-center lg:flex">
            <Tab setPosition={setPosition} selected={selected} setSelected={setSelected}>Home</Tab>
            <Tab setPosition={setPosition} selected={selected} setSelected={setSelected}>About</Tab>
            <Tab setPosition={setPosition} selected={selected} setSelected={setSelected}>Skills</Tab>
            <Tab setPosition={setPosition} selected={selected} setSelected={setSelected}>My Work</Tab>
            <Tab setPosition={setPosition} selected={selected} setSelected={setSelected}>Blog</Tab>
            <Cursor position={position} />
          </ul>
          <Button bgColor="#164EF5" classes={"text-white py-1 px-5 rounded-full"}>Download CV</Button>
        </div>
      </motion.nav>

      <animated.div className={"bg-white h-screen w-full fixed flex flex-col items-center justify-center gap-16"} style={slideInRight}>
        <ul className="text-black text-[22px] text-center flex flex-col gap-5 font-medium">
          <li>Home</li>
          <li>My Work</li>
          <li>About</li>
          <li>Skills</li>
        </ul>
      </animated.div>
    </>
  );
}

export default NavBar;
