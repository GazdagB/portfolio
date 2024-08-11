import React from 'react'
import gbCharicature from "./assets/gb-charicature.png"

const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-[40px]'>
        <img className='h-[156px] mb-[32px]' src={gbCharicature} alt="" />
        <div className='mb-[22px] text-center '>
            <p className='text-[18px] text-[#164EF5]' >👋 HI MY NAME IS:</p>
            <h1 className='text-[27px] font-black'>GAZDAG BALÁZS <span className='text-[#164EF5]'>*</span></h1>
        </div>

        <p className='text-[22px] mb-[32px] '>I'M A WEB DEVELOPER <br /> & GRAPHIC DESIGNER</p>

        <button className='bg-[#164EF5] text-white py-[9px] px-[31px] rounded-full'>HIRE ME</button>
   
    </div>
  )
}

export default Hero