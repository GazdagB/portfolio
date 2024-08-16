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
    <div className="w-full px-6">
        <div className="flex items-center justify-center gap-5 mb-[32px]">
            <IoIosArrowBack className="text-white text-[30px]"/>
            <Button classes={"text-white rounded-full"} text='Frontend' bgColor='#164EF5' paddingYX={"6px 30px"}>
              FRONTEND
              </Button>
            <IoIosArrowForward className="text-white text-[30px]"/>
        </div>
        <div className="w-full py-10 bg-[#222222] rounded-[26px] grid-cols-2 grid">
            <IconSkill icon={htmlIcon} level={"100"} skillName={"HTML"} />
            <IconSkill icon={cssIcon} level={"85"} skillName={"CSS"} />
            <IconSkill icon={sassIcon} level={"69"} skillName={"SASS"} />
            <IconSkill icon={bootstrapIcon} level={"95"} skillName={"BOOTSTRAP"} />
            <IconSkill icon={javascriptIcon} level={"90"} skillName={"JAVASCRIPT"} />
            <IconSkill icon={tailwindCSSIcon} level={"100"} skillName={"TAILWIND"} />
            <IconSkill icon={reactIcon} level={"80"} skillName={"REACT"} />
            <IconSkill icon={jqueryIcon} level={"60"} skillName={"JQUERY"} />
            <IconSkill icon={angularIcon} level={"40"} skillName={"ANGULAR"} />
            <IconSkill icon={gitIcon} level={"85"} skillName={"GIT"} />
        </div>
    </div>
  )
}

export default Skills