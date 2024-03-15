import React, { useState } from 'react'
import HeaderMobil from './HeaderMobil/HeaderMobil'

import './Header.css'

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <>
            <HeaderMobil isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="h-wrapper">
                <div className="h-content">
                    <img src="./assets/images/logo.png" alt="" className="h-logo" />

                    <ul className='flexCenter'>
                        <li><a className='h-menu-item' href="#home">Home</a></li>
                        <li><a className='h-menu-item' href="#skill">Skill</a></li>
                        <li><a className='h-menu-item' href="#experiencia">Experiência</a></li>
                        <li><a className='h-menu-item' href="#projetos">Projetos</a></li>
                        <li><a className='h-menu-item' href="#contato">Contato</a></li>
                    </ul>

                    {/* Menu dropDown */}
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span
                            className={"material-symbols-outlined"}
                            style={{ fontSize: "1.8rem" }}
                        >
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Header