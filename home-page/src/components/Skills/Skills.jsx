import React, { useState } from 'react'
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'
import './Skills.css'

const Skills = () => {

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0])

    const handleSelectSkill = (data) => {
        setSelectedSkill(data)
    }

  return (
    <section id='skill' className="skills-container">
        <h5 className='flexCenter paddings primaryText'>Techical &nbsp; <span> Proficiency</span></h5>
        <div className="skills-content">
            <div className="skills">
                {SKILLS.map((item) => (
                    <SkillCard
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedSkill.title === item.title}
                    onClick={() => handleSelectSkill(item)}
                    />
                ))}
            </div>
            <div className="skills-info">
                <SkillsInfoCard 
                    heading={selectedSkill.title}
                    skills={selectedSkill.skills}
                />
            </div>
        </div>
    </section>
  )
}

export default Skills