import React from 'react'
import './HeaderMobil.css'

const HeaderMobil = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >
                <div className="mobile-menu-container">
                    <img src="./assets/images/logo.png" alt="" className="logo" />
                    <ul>
                    <li><a className='h-menu-item' href="#home">Home</a></li>
                    <li><a className='h-menu-item' href="#skill">Skill</a></li>
                    <li><a className='h-menu-item' href="#experiencia">Experiência</a></li>
                    <li><a className='h-menu-item' href="#projetos">Projetos</a></li>
                    <li><a className='h-menu-item' href="#contato">Contato</a></li>
                    </ul>
                </div>
            </div>
    </>
  )
}

export default HeaderMobil