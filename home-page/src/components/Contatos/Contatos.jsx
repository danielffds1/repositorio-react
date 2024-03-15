import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

import './Contatos.css'

const Contatos = () => {
    return (
        <section id='contato' className="contacts">
            <h2 className="primaryText"> <span>Contatos /</span> Redes Sociais </h2>
            <div className="box-container">
                <a href="/"><FontAwesomeIcon icon={faFacebook} className="facebook-icon" /> </a>
                <a href="/"><FontAwesomeIcon icon={faInstagram} className="instagram-icon" /></a>
                <a href="https://www.linkedin.com/in/danielffds"> <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" /></a>
                <a href="https://github.com/danielffds1/landing-page.git"><FontAwesomeIcon icon={faGithub} className="linkedin-icon" /></a>
            </div>
        </section>
    )
}

export default Contatos