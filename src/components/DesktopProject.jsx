import React from 'react'
import Button from './Button'
import { FaGlobeEurope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const DesktopProject = ({number, bgImage}) => {
  return (
    <div className='flex flex-col items-center justify-center mb-8'>
        {number === 1 && (
            <div className='hidden sm:w-[653px] sm:h-[536px] relative rounded-lg sm:flex flex-col justify-end p-12' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='absolute inset-0 bg-black opacity-50 rounded-lg'></div>
                <div className='relative z-10 text-white mb-8'>
                    <h2 className='text-[32px] font-bold'>PROJECT TITLE</h2>
                    <p className='text-[35px]'>2024</p>
                </div>
                <div className='relative z-10 flex text-white gap-6'>
                    <Button bgColor="white" classes="text-black rounded-full flex items-center justify-center gap-2 sm:h-[49px] sm:w-[162px]" width="130px">
                        <FaGlobeEurope/>
                        <p>Live Site</p>
                    </Button>
                    <Button classes="flex items-center justify-center gap-2 p-1">
                        <FaGithub />
                        Source Code
                    </Button>
                </div>
            </div>
        )}

        {number === 2 && (
            <div className='text-white flex w-full justify-between py-4'> 
                <div className='flex flex-col justify-between py-10'>
                    <div>
                        <h2 className='text-[35px] font-bold'>FIREFOX DEV TOOL</h2>
                        <p className='text-[35px]'>2024</p>
                    </div>
                    <div className='flex gap-4'>
                        <Button bgColor="" classes="border-[1px] text-white rounded-full flex items-center justify-center gap-2 h-[49px] w-[162px]" width="130px">
                            <FaGlobeEurope/>
                            <p>Live Site</p>
                        </Button>
                        <Button classes="flex items-center justify-center gap-2 p-1">
                            <FaGithub />
                            Source Code
                        </Button>
                    </div>
                </div>
                <div className='w-[316.73px] h-[325px] rounded-lg' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

                </div>
            </div>
        )}

        {number === 3 && (
            <div className='text-white'>
                <div className='h-[325px] w-[316.73px] rounded-lg' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <h2 className='text-[35px] font-bold'>CHESS PUZZLES</h2>
                <div className='flex gap-4'>
                <Button bgColor="" classes="border-[1px] text-white rounded-full flex items-center justify-center gap-2 h-[49px] w-[162px]" width="130px">
                    <FaGlobeEurope/>
                     <p>Live Site</p>
                </Button>
                <Button classes="flex items-center justify-center gap-2 p-1">
                    <FaGithub />
                    Source Code
                </Button>
                </div>
            </div>
        )}
    </div>
  )
}

export default DesktopProject;