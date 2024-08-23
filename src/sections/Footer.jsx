import React from 'react'
import gbLogo from '../assets/gb-logo-text.svg'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className='bg-white w-full flex flex-col items-center gap-8 px-6'>
        <div className='w-full h-[1px] bg-black'></div>
        <div className='flex flex-col gap-8 sm:gap-12 sm:py-6 sm:flex-row'>
            <img className='w-[147.83px]' src={gbLogo} alt="" />
            <ul className='text-[18px] text-center flex flex-col sm:flex-row gap-[32px]'>
                <li>Home</li>
                <li>My Work</li>
                <li>About</li>
                <li>Skills</li>
            </ul>
            <div className='text-[20px] flex gap-4  mb-[30px]'>
            <FaGithub />
            <FaFacebook />
            <AiFillInstagram />
            <FaLinkedin />
            </div>
        </div>
    </footer>
  )
}

export default Footer