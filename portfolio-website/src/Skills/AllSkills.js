import './AllSkills.css';

//Frontend Icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";

//Styling Icons
import { SiSass } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { MdOutlineSmartphone } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

//Tools und Workflow
import { AiFillApi } from "react-icons/ai";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiNpmjsFill } from "react-icons/ri";

//Weitere Kenntnisse
import { TbBrandCSharp } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { FaMicrosoft } from "react-icons/fa";

const allSkills = {
    frontend: [
        {icon: <FaHtml5 className="allSkills-react-icons" size={30} color='#E34C26'/>, name: "HTML"},
        {icon: <FaCss3Alt className="allSkills-react-icons" size={30} color='#264DE4'/>, name: "CSS"},
        {icon: <IoLogoJavascript className="allSkills-react-icons" size={30} color='#F7DF1E'/>, name: "JavaScript"},
        {icon: <BiLogoTypescript className="allSkills-react-icons" size={30} color='#007ACC'/>, name: "TypeScript"},
        {icon: <FaReact className="allSkills-react-icons" size={30} color='#61dbfb'/>, name: "React"}
    ],
    styling: [
        {icon: <SiSass className="allSkills-react-icons" size={30} color='#cc6699'/>, name: "SASS / SCSS"},
        {icon: <FaBootstrap className="allSkills-react-icons" size={30} color='#8312FA'/>, name: "Bootstrap"},
        {icon: <MdOutlineSmartphone className="allSkills-react-icons" size={30}/>, name: "Responsive Design"},
        {icon: <FaUserCircle className="allSkills-react-icons" size={30}/>, name: "UI/UX"}
    ],
    toolsUndWorkflow: [
        {icon: <AiFillApi className="allSkills-react-icons" size={30} color='#40E0D0'/>, name: "REST-API"},
        {icon: <FaGitAlt className="allSkills-react-icons" size={30} color='#F1502F'/>, name: "Git"},
        {icon: <FaGithub className="allSkills-react-icons" size={30}/>, name: "GitHub"},
        {icon: <RiNpmjsFill className="allSkills-react-icons" size={30} color='#CB3837'/>, name: "NPM"},
    ],
    weitereKenntnisse: [
        {icon: <TbBrandCSharp className="allSkills-react-icons" size={30} color='#9179E4'/>, name: "C#"},
        {icon: <FaDatabase className="allSkills-react-icons" size={30} color='#336791'/>, name: "SQL"},
        {icon: <DiScrum className="allSkills-react-icons" size={30} color='#219AB5'/>, name: "Scrum"},
        {icon: <FaMicrosoft className="allSkills-react-icons" size={30} color='#ffb900'/>, name: "Dynamics 365"}
    ],
}

export default allSkills;