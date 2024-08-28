import gbImage from "../assets/images/gb-image.png"

const Profile = () => {
  return (
    <div className='h-[261.3px] sm:w-[312.72px] w-[209px] sm:h-[391.6px] relative mb-10'>
        <div className='bg-[#164EF5] h-[244.68px] sm:w-[287.82px] w-[192px] sm:h-[365.31px] rounded-lg absolute bottom-0 right-0'>
            
        </div>
        <div className='bg-[#E9E9E9] h-[244.68px] sm:h-[366.69px] w-[192px] sm:w-[287.82px] rounded-lg absolute top-0 left-0 flex justify-center'>
            <img src={gbImage} alt="" className='absolute h-[307px] sm:h-[460.09px] bottom-0'/>
        </div>

    </div>
  )
}

export default Profile