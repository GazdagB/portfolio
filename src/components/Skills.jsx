import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import Button from './Button'
import IconSkill from "./IconSkill";

import htmlIcon from "../assets/images/html-icon.png"
import cssIcon from "../assets/images/css-icon.png"
import sassIcon from "../assets/images/sass-icon.png"
import tailwindCSSIcon from "../assets/images/tailwind-icon.png"
import bootstrapIcon from "../assets/images/bootstrap-icon.png"
import javascriptIcon from "../assets/images/javascript-icon.png"
import reactIcon from "../assets/images/react.svg"
import jqueryIcon from "../assets/images/jquery-icon.svg"
import angularIcon from "../assets/images/angular-icon.svg"
import gitIcon from "../assets/images/git-icon.png"

const Skills = () => {
  return (
    <div className="w-full px-6 flex flex-col items-center">
        <div className="flex items-center justify-center gap-5 mb-[32px] sm:hidden">
            <IoIosArrowBack className="text-white text-[30px]"/>
            <Button classes={"text-white rounded-full"} text='Frontend' bgColor='#164EF5' paddingYX={"6px 30px"}>
              FRONTEND
              </Button>
            <IoIosArrowForward className="text-white text-[30px]"/>
        </div>

        <div className=" gap-8 mb-[32px] w-full justify-center hidden sm:flex">
          <Button classes={"text-white sm:text-[20px] rounded-full border-[1px]"} text='Frontend' bgColor='' paddingYX={"6px 30px"}>All</Button>
          <Button classes={"text-white sm:text-[20px] rounded-full"} text='Frontend border-[1px]' bgColor='#164EF5' paddingYX={"6px 30px"}>Frontend</Button>
          <Button classes={"text-white sm:text-[20px] rounded-full border-[1px]"} text='Frontend' bgColor='' paddingYX={"6px 30px"}>Backend</Button>
          <Button classes={"text-white sm:text-[20px] rounded-full border-[1px]"} text='Frontend' bgColor='' paddingYX={"6px 30px"}>Design</Button>
        </div>
        <div className="sm:max-w-[653px] lg:max-w-[886px] w-full py-10 bg-[#222222] rounded-[26px] flex flex-wrap justify-center px-10 gap-y-10 gap-x-8 max-w-[880px]">
            <IconSkill className="w-[calc(25%-16px)]" icon={htmlIcon} level={"100"} skillName={"HTML"} />
            <IconSkill className="w-[calc(25%-16px)]" icon={cssIcon} level={"85"} skillName={"CSS"} />
            <IconSkill className="w-[calc(25%-16px)]" icon={sassIcon} level={"69"} skillName={"SASS"} />
            <IconSkill className="w-[calc(25%-16px)]" icon={bootstrapIcon} level={"95"} skillName={"BOOTSTRAP"} />
            <IconSkill className="w-[calc(25%-16px)]" icon={javascriptIcon} level={"90"} skillName={"JAVASCRIPT"} />
            <IconSkill className="w-[calc(25%-16px)]" icon={tailwindCSSIcon} level={"100"} skillName={"TAILWIND"} />
            <IconSkill className="w-[calc(25%-16px)]" icon={reactIcon} level={"80"} skillName={"REACT"} />
            <IconSkill className="w-[calc(25%-16px)]" icon={jqueryIcon} level={"60"} skillName={"JQUERY"} />
            <IconSkill className="w-[calc(25%-16px)]" icon={angularIcon} level={"40"} skillName={"ANGULAR"} />
            <IconSkill className="w-[calc(25%-16px)]" icon={gitIcon} level={"85"} skillName={"GIT"} />
        </div>
    </div>
  )
}

export default Skills