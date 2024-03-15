import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({ imageUrl, title, description }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="project-info orangeText">
        <h3>{title}</h3>
        <p className='normalText'>{description}</p>
      </div>
      <button className="button">
        <a href="home">Ver Projeto</a>
      </button>
    </div>
  )
}

export default ProjectCard