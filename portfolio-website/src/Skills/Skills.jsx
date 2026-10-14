import './Skills.css';
import Skillstack from './Skillstack';
import allSkills from './AllSkills';

function Skills(){
    return (
        <section className='skills-wrapper'>
            <div className='skills-inhalt'>
                <h1>Meine Skills & Technologien.</h1>
                <br />
                <p>Hier sind die Technologien, mit denen ich arbeite und die ich aktuell in meinem Alltag einsetze.</p>
                <div className='skills-stack'>
                    <Skillstack headline="Frontend" stacklist={allSkills.frontend}/>
                     <Skillstack headline="Styling" stacklist={allSkills.styling}/>
                    <Skillstack headline="Tools & Workflow" stacklist={allSkills.toolsUndWorkflow}/>
                    <Skillstack headline="Weitere Kenntnisse" stacklist={allSkills.weitereKenntnisse}/>
                </div>
            </div>
        </section>
    )
}

export default Skills;