import gbCharicature from "../assets/images/gb-charicature.png"
import Button from '../components/Button'

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row-reverse items-center h-svh w-full justify-center lg:gap-[2%] bg-white'>
        <img className='h-[156px] sm:h-[350px] lg:h-[500px] lg:self-end  mb-[32px]' src={gbCharicature} alt="" />
        <div className="flex flex-col justify-center">
          <div className='mb-[22px]  text-center lg:text-start '>
              <p className='text-[18px] sm:text-[31.25px] text-[#164EF5]' >👋 HI MY NAME IS:</p>
              <h1 className='text-[27px] sm:text-[52px] font-black'>GAZDAG BALÁZS <span className='text-[#164EF5]'>*</span></h1>
          </div>
          <p className='text-[22px] text-center lg:text-start sm:text-[35px] mb-[32px] sm:mb-[40px] leading-tight'>I&apos;M A WEB DEVELOPER <br /> &amp; GRAPHIC DESIGNER</p>
          <div className="flex justify-center lg:justify-start gap-10">
            <Button classes={"text-white rounded-full sm:text-[25px]"} bgColor='#164EF5' paddingYX={"9px 31px"} >
              HIRE ME
            </Button>
            <div className="text-[22px] font-semibold sm:flex items-center gap-3 hidden">
              <div className="circle rounded-full aspect-square w-4 bg-[#56C42F] "></div>
              <p>AVAILABLE</p>
            </div>
        </div>
        </div>
        {/* <button className='bg-[#164EF5] text-white py-[9px] px-[31px] rounded-full'>HIRE ME</button> */}
   
    </div>
  )
}

export default Hero