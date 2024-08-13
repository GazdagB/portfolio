import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import Button from './Button'
import IconSkill from "./IconSkill";

const Skills = () => {
  return (
    <div>
        <div className="flex items-center justify-center gap-5 mb-[32px]">
            <IoIosArrowBack className="text-white text-[30px]"/>
            <Button classes={"text-white rounded-full"} text='Frontend' bgColor='#164EF5' paddingYX={"6px 30px"}/>
            <IoIosArrowForward className="text-white text-[30px]"/>
        </div>
        <div className="w-[280px] h-[554px] bg-[#222222] rounded-[26px] flex ">
            <IconSkill level={"100"} skillName={"HTML"} />
            <IconSkill level={"100"} skillName={"HTML"} />
        </div>
    </div>
  )
}

export default Skills