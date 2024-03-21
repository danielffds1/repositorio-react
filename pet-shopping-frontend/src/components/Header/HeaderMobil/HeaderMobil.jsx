import React from 'react'
import './HeaderMobil.css'
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/img/logo.png'

const HeaderMobil = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >
                <div className="mobile-menu-container">
                <img src={logo} alt="Logo do petShop" />
                <ul>
                    <li><NavLink to="/" className='h-menu-item' exact activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/about" className='h-menu-item' activeClassName="active">Sobre</NavLink></li>
                    <li><NavLink to="/services" className='h-menu-item' activeClassName="active">Serviços</NavLink></li>
                    <li><NavLink to="/contact" className='h-menu-item' activeClassName="active">Contato</NavLink></li>
                </ul>
                </div>
            </div>
    </>
  )
}

export default HeaderMobil