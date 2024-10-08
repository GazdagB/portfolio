// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from './Button';
import { FaGlobeEurope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



// eslint-disable-next-line react/prop-types
const MobileProject = ({ bgImage, number}) => {
  return (
    <>
    {/*Tablet  projects */}
    


    {/*Mobile projects */}
    <div className="text-white w-full px-6 mb-10 sm:hidden flex flex-col">
      <div className="h-[280px] aspect-square rounded-lg " style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>
      <h3 className="text-[25px] font-black">PROJECT TITLE</h3>
      <p className="text-[20px] mb-3">2024</p>
      <div className="flex gap-6">
        <Button bgColor="white" classes="text-black rounded-full flex items-center justify-center gap-2" width="130px">
            <FaGlobeEurope/>
            <p>Live Site</p>
        </Button>
        <Button classes="flex items-center justify-center gap-2 p-1">
        <FaGithub />
        Source Code
        </Button>
      </div>
    </div>
    </>
  );
}

export default MobileProject;