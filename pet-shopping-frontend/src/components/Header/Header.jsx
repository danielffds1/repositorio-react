import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png'
import './Header.css';
import { Box } from '@mui/material';
import HeaderMobil from './HeaderMobil/HeaderMobil';


const Header = () => {

    const [isSearchActive, setIsSearchActive] = useState(false)

    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    const toogleSearch = () => {
        setIsSearchActive(!isSearchActive)
    }

    return (
        <header className='h-header'>
            <HeaderMobil isOpen={openMenu} toggleMenu={toggleMenu} />
            <Box>
                <img src={logo} alt="Logo do petShop" />
            </Box>
            <nav className='h-nav'>
                <ul>
                    <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">Sobre</NavLink></li>
                    <li><NavLink to="/services" activeClassName="active">Serviços</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">Contato</NavLink></li>
                </ul>
            </nav>

            <div class="h-icons">
                <div class="fas fa-search" id="search-btn" onClick={toogleSearch}></div>
                <div class="fas fa-bars menu-btn" id="menu-btn" onClick={toggleMenu}></div>
            </div>

            <div className={`h-search ${isSearchActive ? 'active' : ''}`}>
                <input className="h-search-input" type="text" placeholder='Search' />
                <div class="search-label">
                    <label class="fas fa-search"></label>
                </div>
            </div>
        </header>
    );
};

export default Header;