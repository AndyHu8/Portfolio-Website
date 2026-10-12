import './Skillstack.css';

function Skillstack({headline, stacklist = []}) {
    return (
        <div className='skillstack-wrapper'>
            <p>{headline}</p>
            <br />
            {stacklist.map((skill) => {
                return (
                    <div className='skillstack-realstack' key={skill.name}>
                        {skill.icon}
                        <span className='span-text'>{skill.name}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Skillstack;