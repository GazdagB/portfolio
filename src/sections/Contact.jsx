// eslint-disable-next-line no-unused-vars
import React from 'react'

import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div className='relative'>
    
        <div className='bg-[#DBDBDB] px-6 lg:px-16 py-10 sm:w-[653px] lg:w-[800px] sm:rounded-lg mt-36'>
            <h2 className='u-h2 mb-5 sm:text-[48px]'>Get in touch</h2>
            <p className='u-body mb-6 sm:text-[20px] lg:w-[450px]'>Feel free to contact me any time. I will get back to you as I can!</p>
            <form className='flex flex-col items-center lg:w-[450px]' action="">
                <input className='w-full mb-[11px] py-3 px-5 rounded-md' type="text" name="name" id="nameInput" placeholder='Name' required />
                <input className='w-full mb-[11px] py-3 px-5 rounded-md' type="email" name="email" id="emailInput" placeholder='Email' required />
                <textarea className='w-full px-5 py-3 rounded-md mb-[50px]' name="message" rows={4} cols={30} id="messageInput" placeholder='Message...' required></textarea>
                <button className='bg-[#EF479B] inline px-8 py-2 rounded-full text-white font-bold sm:mb-20 self-start'>SEND</button>
            </form>
        </div>

        <div className='bg-[#164EF5] w-full h-[224px] lg:w-[350px] px-10 py-8 text-white flex flex-col sm:rounded-lg bottom-[-250px] lg:bottom-[150px] lg:right-[-100px] right-[-200px] justify-center sm:w-[537px] sm:h-[362px] sm:absolute'>
                <h3 className='text-[22px] sm:text-[31px] font-black sm:mb-10'>Contact me</h3>
                <div className='flex flex-col'>
                    <a className='flex text-[20px] sm:text-[25px] items-center gap-3 mb-1' href="mailto:gazdagbal@gmail.com"> <MdOutlineMailOutline className='text-[20px] mb-1' />  gazdagbal@gmail.com</a>
                    <a className='flex text-[20px] sm:text-[25px] items-center gap-3 mb-6 sm:mb-8' href="tel:+4915222348975"> <FaPhoneAlt className='text-[16px] mb-1'/> +4915222348975</a>
                    <div className='text-[25px] flex gap-2'>
                    <FaGithub />
                    <RiInstagramFill />
                    <FaFacebook />
                    <FaLinkedin />
                    </div>
                </div>
    </div>
    </div>
  )
}

export default Contact