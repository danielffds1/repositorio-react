import React from 'react'

import './Projects.css'
import ProjectCard from './ProjectCard/ProjectCard'
import { PROJECTS } from '../../utils/data'

const Projects = () => {
    return (
        <div id="projetos" className="p-container">
            <p className="primaryText">Desenvolvimento <span className='p-project'>de Projetos</span></p>
            <div className="p-card">
                {PROJECTS.map((item) => (
                    <ProjectCard
                        key={item.id}
                        imageUrl={item.image}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>

        </div>
    )
}

export default Projects