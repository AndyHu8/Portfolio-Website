import './Skills.css';
import Skillstack from './Skillstack';
import allSkills from './AllSkills';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";

function Skills(){
    return (
        <section className='skills-wrapper'>
            <div className='skills-inhalt'>
                <h1>MEINE TECHNLOGIEN</h1>
                <br />
                <p>Hier sind die Technologien, mit denen ich arbeite und die ich aktuell in meinem Alltag einsetze.</p>
                <div className='skills-stack'>
                    <Skillstack headline="Frontend" stacklist={[
                        {icon: <FaHtml5 className="skills-react-icons" size={30} color='#E34C26'/>, name: "HTML"},
                        {icon: <FaCss3Alt className="skills-react-icons" size={30} color='#264DE4'/>, name: "CSS"},
                        {icon: <IoLogoJavascript className="skills-react-icons" size={30} color='#F7DF1E'/>, name: "JavaScript"},
                        {icon: <BiLogoTypescript className="skills-react-icons" size={30} color='#007ACC'/>, name: "TypeScript"},
                        {icon: <FaReact className="skills-react-icons" size={30} color='#61dbfb'/>, name: "React"}
                    ]}/>
                     <Skillstack headline="Styling" stacklist={allSkills.frontend}/>
                    <Skillstack headline="Tools & Workflow" stacklist={allSkills.frontend}/>
                    <Skillstack headline="Weitere Kenntnisse" stacklist={allSkills.frontend}/>
                </div>
            </div>
        </section>
    )
}

export default Skills;