/* eslint-disable react/prop-types */
import Button from './Button'
import { FaGlobeEurope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const DesktopProject = ({number, bgImage, siteUrl, githubUrl}) => {
  return (
    <div className='flex flex-col items-center justify-center mb-8'>
        {number === 1 && (
            <div className='hidden sm:w-[653px] sm:h-[536px] lg:w-[920px] lg:h-[536px] relative rounded-lg sm:flex flex-col justify-end p-12' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='absolute inset-0 bg-black opacity-50 rounded-lg'></div>
                <div className='relative z-10 text-white mb-8'>
                    <h2 className='text-[32px] font-bold'>PROJECT TITLE</h2>
                    <p className='text-[35px]'>2024</p>
                </div>
                <div className='relative z-10 flex text-white gap-6'>
                    <Button bgColor="white" classes="text-black rounded-full flex items-center justify-center gap-2 sm:h-[49px] sm:w-[162px]" width="140px">
                        <FaGlobeEurope/>
                        <a className='2xl:text-xl' href={siteUrl} target='blank'>Live Site</a>
                    </Button>
                    <a className='flex justify-center items-center' href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button classes="flex items-center justify-center gap-2 p-1 2xl:text-xl">
                        <FaGithub />
                        <p className=''>Source Code</p>
                    </Button>
                    </a>
                    
                </div>
            </div>
        )}

        {number === 2 && (
            <div className='text-white flex w-full justify-between py-4 rounded-lg'> 
                <div className='flex flex-col justify-between py-10'>
                    <div>
                        <h2 className='text-[35px] font-bold'>Message Silo</h2>
                        <p className='text-[35px]'>2024</p>
                    </div>
                    <div className='flex items-center gap-4 2xl:text-xl'>
                        <a href={siteUrl} target='blank'>
                        <Button bgColor="" classes="border-[1px] text-white rounded-full flex items-center justify-center gap-2 h-[49px] w-[162px]" width="140px">
                            <FaGlobeEurope/>
                            <p >Live Site</p>
                        </Button>
                        </a>
                        <a href={githubUrl} target='blank' className='flex justify-center'>
                            <Button classes="flex items-center justify-center gap-2 p-1 2xl:text-xl">
                                <FaGithub />
                                <p >Source Code</p>
                            </Button>
                        </a>
                    </div>
                </div>
                <div className='w-[316.73px] h-[325px] lg:w-[440px] rounded-lg' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'left' }}>

                </div>
            </div>
        )}

        {number === 3 && (
            <div className='text-white'>
                <div className='h-[325px] w-[316.73px] lg:w-[440px] rounded-lg' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <h2 className='text-[35px] font-bold'>CHESS PUZZLES</h2>
                <div className='flex gap-4 items-center'>
                <a  href={siteUrl} target='blank'>
                    <Button bgColor="" classes="border-[1px] text-white rounded-full flex items-center justify-center gap-2 h-[49px] w-[162px] 2xl:text-xl" width="140px">
                        <FaGlobeEurope/>
                         <p>Live Site</p>
                    </Button>
                </a>
                <a href={githubUrl} className="flex justify-center 2xl:text-xl">
                    <Button classes="flex items-center justify-center gap-2 p-1">
                        <FaGithub />
                        Source Code
                    </Button>
                </a>
                </div>
            </div>
        )}
    </div>
  )
}

export default DesktopProject;