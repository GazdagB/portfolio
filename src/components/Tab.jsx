/* eslint-disable react/prop-types */
import  { useRef, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {motion} from "framer-motion"

const Tab = ({ children, setPosition, selected, setSelected, isScrollSelected, anchorTo}) => {
  const ref = useRef(null);

  const hoverStyles = {
    scale: 1.05
  }

  function handleMouseEnter() {
    if (!ref.current) return;

    const { width } = ref.current.getBoundingClientRect();

    setPosition({
      width,
      opacity: 1,
      left: ref.current.offsetLeft
    });
  }

  function handleMouseLeave() {
    if (!ref.current) return;
    // Move back to selected tab position if there's a selected tab
    setPosition(selected);
  }

  function handleClick() {
   transitionCursor();
  }

  useEffect(()=>{
    window.addEventListener("resize",()=>{
      transitionCursor(); 
    })

  },[])

  useEffect(() => {
    if (isScrollSelected) {
     transitionCursor()
    }
  }, [isScrollSelected]);

  function transitionCursor(){
    if (!ref.current) return;

      const { width } = ref.current.getBoundingClientRect();

      // Save the selected tab position
      const newSelected = {
        width,
        opacity: 1,
        left: ref.current.offsetLeft
      };

      setSelected(newSelected); // Set the selected position
      setPosition(newSelected);

  }
  return (
    <Link smooth to={anchorTo}>
    <motion.li
      ref={ref}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      className='relative z-10 block cursor-pointer uppercase text-white mix-blend-difference px-5'
      whileHover={hoverStyles}
      animate={isScrollSelected ? {scale: 1.05} : {scale: 1}}
    >
      {children}
    </motion.li>
    </Link>
  );
};

export default Tab;