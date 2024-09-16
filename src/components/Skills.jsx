import { useState } from "react";
import Button from './Button';
import IconSkill from "./IconSkill";

//Frontend Icons 
import htmlIcon from "../assets/images/frontend-icons/html-icon.png";
import cssIcon from "../assets/images/frontend-icons/css-icon.png";
import sassIcon from "../assets/images/frontend-icons/sass-icon.png";
import tailwindCSSIcon from "../assets/images/frontend-icons/tailwind-icon.png";
import bootstrapIcon from "../assets/images/frontend-icons/bootstrap-icon.png";
import javascriptIcon from "../assets/images/frontend-icons/javascript-icon.png";
import reactIcon from "../assets/images/frontend-icons/react.svg";
import jqueryIcon from "../assets/images/frontend-icons/jquery-icon.svg";
import angularIcon from "../assets/images/frontend-icons/angular-icon.svg";
import gitIcon from "../assets/images/frontend-icons/git-icon.png";

//Backend Icons
import nodeJsIcon from "../assets/images/backend-icons/nodejs.svg"
import expressJsIcon from "../assets/images/backend-icons/express.svg"
import mongoDbIcon from "../assets/images/backend-icons/mongodb.svg"
import mongooseIcon from "../assets/images/backend-icons/mongoose.svg"
import postgreSqlIcon from "../assets/images/backend-icons/postgreSql.svg"
import mySqlIcon from "../assets/images/backend-icons/mysql.svg"
import firebaseIcon from "../assets/images/backend-icons/firebase.svg"
import javaIcon from "../assets/images/backend-icons/java.svg"
import springIcon from "../assets/images/backend-icons/spring.svg"

//Design Icons
import photoshopIcon from "../assets/images/design-icons/photoshop.svg"
import illustratorIcon from "../assets/images/design-icons/illustrator.svg"
import inDesignIcon from "../assets/images/design-icons/indesign.svg"
import figmaIcon from "../assets/images/design-icons/figma.svg"
// import xdIcon from "../assets/images/design-icons/adobexd.svg"
import afterEffectsIcon from "../assets/images/design-icons/aftereffects.svg"
import premierProIcon from "../assets/images/design-icons/premierpro.svg"


import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';
import { Fade } from "react-awesome-reveal";


const skills = [
  {
    icon: htmlIcon,
    level: "100",
    skillName: "HTML",
    category: "frontend"
  },
  {
    icon: cssIcon,
    level: "85",
    skillName: "CSS",
    category: "frontend"
  },
  {
    icon: sassIcon,
    level: "69",
    skillName: "SASS",
    category: "frontend"
  },
  {
    icon: bootstrapIcon,
    level: "95",
    skillName: "BOOTSTRAP",
    category: "frontend"
  },
  {
    icon: javascriptIcon,
    level: "90",
    skillName: "JAVASCRIPT",
    category: "frontend"
  },
  {
    icon: tailwindCSSIcon,
    level: "100",
    skillName: "TAILWINDCSS",
    category: "frontend"
  },
  {
    icon: reactIcon,
    level: "80",
    skillName: "REACTJS",
    category: "frontend"
  },
  {
    icon: jqueryIcon,
    level: "60",
    skillName: "JQUERY",
    category: "frontend"
  },
  {
    icon: angularIcon,
    level: "40",
    skillName: "ANGULAR",
    category: "frontend"
  },
  {
    icon: gitIcon,
    level: "85",
    skillName: "ANGULAR",
    category: "frontend"
  },
  {
    icon: nodeJsIcon,
    level: "65",
    skillName: "NODE JS",
    category: "backend"
  },
  {
    icon: expressJsIcon,
    level: "75",
    skillName: "EXPRESS JS",
    category: "backend"
  },
  {
    icon: mongoDbIcon,
    level: "80",
    skillName: "MONGODB",
    category: "backend"
  },
  {
    icon: mongooseIcon,
    level: "60",
    skillName: "MONGOOSE",
    category: "backend"
  },
  {
    icon: postgreSqlIcon,
    level: "0",
    skillName: "POSTGRE SQL",
    category: "backend"
  },
  {
    icon: mySqlIcon,
    level: "70",
    skillName: "MYSQL",
    category: "backend"
  },
  {
    icon: firebaseIcon,
    level: "90",
    skillName: "FIREBASE",
    category: "backend"
  },
  {
    icon: javaIcon,
    level: "70",
    skillName: "JAVA",
    category: "backend"
  },
  {
    icon: springIcon,
    level: "50",
    skillName: "SPRINGBOOT",
    category: "backend"
  },
  {
    icon: photoshopIcon,
    level: "90",
    skillName: "PHOTOSHOP",
    category: "design"
  },
  {
    icon: illustratorIcon,
    level: "95",
    skillName: "ILLUSTRATOR",
    category: "design"
  },
  {
    icon: inDesignIcon,
    level: "75",
    skillName: "INDESIGN",
    category: "design"
  },
  {
    icon: figmaIcon,
    level: "80",
    skillName: "FIGMA",
    category: "design"
  },
  {
    icon: premierProIcon,
    level: "50",
    skillName: "PREMIER PRO",
    category: "design"
  },
  {
    icon: afterEffectsIcon,
    level: "50",
    skillName: "AFTER EFFECTS",
    category: "design"
  },
]

const skillsAnimation = {
  hidden: {
    opacity: 0,
    x: 300
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80
    }
  }
};

const Skills = () => {
  const [selected, setSelected] = useState("frontend");

  const filteredSkills = skills.filter(skill => selected === "all" || skill.category === selected);

  return (
    <div className="w-full px-6 flex flex-col items-center">
      <div className="flex items-center justify-center gap-5 mb-[32px] sm:hidden">
        <IoIosArrowBack className="text-white text-[30px]" />
        <Button classes={"text-white rounded-full"} text='Frontend' bgColor='#164EF5' paddingYX={"6px 30px"}>
          FRONTEND
        </Button>
        <IoIosArrowForward className="text-white text-[30px]" />
      </div>

      <div className="gap-8 mb-[32px] w-full justify-center hidden sm:flex">
        <Fade direction="right" cascade={true} duration={500}>
          <Button onClick={() => { setSelected("all") }} classes={`text-white sm:text-[20px] rounded-full border-[1px] ${selected === "all" ? "border-[#164EF5]" : ""}`} text='Frontend' bgColor={selected === "all" ? "#164EF5" : ""} paddingYX={"6px 30px"}>All</Button>
          <Button onClick={() => { setSelected("frontend") }} classes={`text-white sm:text-[20px] rounded-full border-[1px] ${selected === "frontend" ? "border-[#164EF5]" : ""}`} text='Frontend border-[1px]' bgColor={selected === "frontend" ? "#164EF5" : ""} paddingYX={"6px 30px"}>Frontend</Button>
          <Button onClick={() => { setSelected("backend") }} classes={`text-white sm:text-[20px] rounded-full border-[1px] ${selected === "backend" ? "border-[#164EF5]" : ""}`} text='Frontend' bgColor={selected === "backend" ? "#164EF5" : ""} paddingYX={"6px 30px"}>Backend</Button>
          <Button onClick={() => { setSelected("design") }} classes={`text-white sm:text-[20px] rounded-full border-[1px] ${selected === "design" ? "border-[#164EF5]" : ""}`} text='Frontend' bgColor={selected === "design" ? "#164EF5" : ""} paddingYX={"6px 30px"}>Design</Button>
        </Fade>
      </div>
      <Fade direction="right">
        <div className="skill-container sm:max-w-[653px] lg:max-w-[886px] w-full py-10 bg-[#222222] rounded-[26px] px-10 max-w-[880px]">
          <AnimatePresence>
            <motion.div className="w-full flex flex-wrap justify-center gap-y-10 gap-x-8" key={selected} variants={skillsAnimation} initial='hidden' animate="visible">
              {filteredSkills.map((skill) => (
                <IconSkill key={skill.skillName} className="w-[calc(25%-16px)]" icon={skill.icon} level={skill.level} skillName={skill.skillName} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Fade>
    </div>
  );
};

export default Skills;