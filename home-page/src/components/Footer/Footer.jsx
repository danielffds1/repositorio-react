import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="box-container">
        <div className="box">
          <h3>links da página</h3>
          <a href="#home"><FontAwesomeIcon icon={faAngleRight} className="fa-angle-right"/> home</a>
          <a href="#projects"><FontAwesomeIcon icon={faAngleRight} className="fa-angle-right"/> Projetos</a>
          <a href="#skill"><FontAwesomeIcon icon={faAngleRight} className="fa-angle-right"/> Skill</a>
          <a href="#contact"><FontAwesomeIcon icon={faAngleRight} className="fa-angle-right"/> Contatos</a>
        </div>
        
        <div className="box">
          <h3>Contatos</h3>
          <a href="#"><FontAwesomeIcon icon={faPhone} className="fa-angle-right"/> (31) 98703-2776</a>
          <a href="#"><FontAwesomeIcon icon={faEnvelope} className="fa-angle-right"/> danielffds6@gmail.com</a>
        </div>

        <div className="box">
          <h3>Redes Sociais</h3>
          <a href="#"><FontAwesomeIcon icon={faFacebookF} className="fa-angle-right"/> Facebook</a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} className="fa-angle-right"/> Instagram</a>
          <a href="https://www.linkedin.com/in/danielffds"><FontAwesomeIcon icon={faLinkedin} className="fa-angle-right"/> Linkedin</a>
          <a href="https://github.com/danielffds1/landing-page.git"><FontAwesomeIcon icon={faGithub} className="fa-angle-right"/> Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
