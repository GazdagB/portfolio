import gbCharicature from "../assets/images/gb-charicature.png"
import gbHelloWorld from "../assets/images/gb-helloworld.png"
import gbBasic from "../assets/images/gb-basic.png"
import Button from '../components/Button'
import {Fade} from 'react-awesome-reveal'
import {motion} from "framer-motion"

const Hero = () => {

  const btnHoverStyles = {
    scale: 1.05,
    backgroundColor: "#EF479B",
    boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.3)"
  }

  return (
    <div className='w-full flex justify-center bg-white'>
        <div className="h-svh  w-full flex flex-col lg:flex-row-reverse items-center justify-center lg:flex-row lg:pt-32 2xl:justify-between 2xl:max-w-[1400px] lg:gap-[5%]">
          <Fade direction="right">
            <motion.img whileHover={{rotateY: 10, rotateX: 20, perspective: 100, scale: 1.1}} className='h-[156px] sm:h-[350px] lg:h-[500px] 2xl:h-[600px] lg:self-end  mb-[32px]' src={gbHelloWorld} alt="" />
          </Fade>
          <div className="flex flex-col justify-center">
          <Fade cascade={true} direction="left" delay={50} duration={500}>
            <div className='mb-[22px]  text-center lg:text-start '>
                <p className='text-[18px] sm:text-[31.25px] text-[#164EF5]' >👋 HI MY NAME IS:</p>
                <h1 className='text-[27px] sm:text-[52px] font-black'>GAZDAG BALÁZS <span className='text-[#164EF5]'>*</span></h1>
            </div>
            <p className='text-[22px] text-center lg:text-start sm:text-[35px] mb-[32px] sm:mb-[40px] leading-tight'>I&apos;M A WEB DEVELOPER <br /> &amp; GRAPHIC DESIGNER</p>
            <div className="flex justify-center lg:justify-start gap-10">
              <Button whileHover={btnHoverStyles} classes={"text-white rounded-full sm:text-[25px]"} bgColor='#164EF5' paddingYX={"9px 31px"} >
                HIRE ME
              </Button>
              <motion.div whileHover={{rotate: 2}} className="cursor-default text-[22px] font-semibold sm:flex items-center gap-3 hidden">
                <div className="circle rounded-full aspect-square w-4 bg-[#56C42F] mb-[6px]"></div>
                <p>AVAILABLE</p>
              </motion.div>
          </div>
          </Fade>
        </div>
        </div>
        
        {/* <button className='bg-[#164EF5] text-white py-[9px] px-[31px] rounded-full'>HIRE ME</button> */}
   
    </div>
  )
}

export default Hero