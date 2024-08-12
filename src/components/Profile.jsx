import React from 'react'
import gbImage from "../assets/gb-image.png"

const Profile = () => {
  return (
    <div className='h-[261.3px] w-[209px] relative mb-10'>
        <div className='bg-[#164EF5] h-[244.68px] w-[192px] rounded-lg absolute bottom-0 right-0'>
            
        </div>
        <div className='bg-[#E9E9E9] h-[244.68px] w-[192px] rounded-lg absolute top-0 left-0 flex justify-center'>
            <img src={gbImage} alt="" className='absolute h-[307px] bottom-0'/>
        </div>

    </div>
  )
}

export default Profile