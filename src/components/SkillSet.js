import './SkillSet.css'

const skillsData = [
    {
        name: 'HTML',
        experience: '1'
    },
    {
        name: 'CSS',
        experience: '1'
    },
    {
        name: 'Javascript',
        experience: '1'
    },
    {
        name: 'Accessibility',
        experience: '1'
    },
    {
        name: 'React',
        experience: '0.5'
    },
    {
        name: 'Sass',
        experience: '0.5'
    }
];

const skills = skillsData.map((skill)=> {
    return (
        <div className="skillset__item">
            <h3>{skill.name}</h3>
            <p>{skill.experience} Years Experience</p>
        </div>
    )
})


function SkillSet() {
    return (
        <section className="skillset">
            {skills}
        </section>
    )
}


export default SkillSet