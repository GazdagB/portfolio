import React from 'react'
import {motion} from "framer-motion"

const Cursor = ({position}) => {
  return (
    <motion.li animate={position} className='absolute z-0 h-7 rounded-full bg-black md:h-12 w-36'></motion.li>
  )
}

export default Cursor