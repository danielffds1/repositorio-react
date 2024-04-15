import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {

  return (
    <div className='footer-container'>
      <div className="footer-about">
        <h3>Sobre</h3>
        <p>Texto sobre a empresa</p>
        <p>Nosso Time</p>
        <p>Blog</p>
        <p>Privacy Policy</p>
      </div>

      <div className="footer-services">
        <h3>Serviços</h3>
        <p>Nossos produtos</p>
        <p>Planos</p>
        <p>Promoções</p>
        <p>Metodos de pagamento</p>
      </div>

      <div className="footer-contact">
        <h3>Contatos</h3>
        <p>Telefone: (11) 9999-9999</p>
        <p>Amor, cuidado e atenção seu pet merece.</p>

        <div className="footer-btn">
          <input type="text" placeholder='Envie sua mensagem' />
          <button><img src={assets.icon_message} alt="" /></button>
        </div>

        <div className="footer-social-icons">
          <img src={assets.icon_facebook} alt="" />
          <img src={assets.icon_instagram} alt="" />
          <img src={assets.icon_whatsapp} alt="" />
          <img src={assets.icon_twitter} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Footer