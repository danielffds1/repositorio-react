import { useRef, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'

const Navbar = () => {

  const [menu, setMenu] = useState("home")

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('navbar-menu-visible')
    e.target.classList.toggle('open')
  }

  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <img className='logo' src={assets.logo} alt="Logo do website" />
      </div>
      <ul ref={menuRef} className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
        <li onClick={()=>setMenu("sobre")} className={menu==="sobre"?"active":""}>Sobre</li>
        <li onClick={()=>setMenu("servico")} className={menu==="servico"?"active":""}>Serviços</li>
        <li onClick={()=>setMenu("contato")} className={menu==="contato"?"active":""}>Contato</li>
      </ul>
      <div className="navbar-right">
        <input type="text" placeholder='Busca' />
        <div className='navbar-serach'>
          <img className='navbar-serach-icon' src={assets.search_icon} alt="imagem de busca" />
        </div>
      </div>
      <div className='navbar-dropdown'>
        <img  src={assets.botao_de_menu} onClick={dropdown_toggle} alt="" />
      </div>
    </div>
  )
}

export default Navbar