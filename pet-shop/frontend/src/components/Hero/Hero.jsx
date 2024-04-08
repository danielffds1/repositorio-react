import './Hero.css'
import { assets } from '../../assets/assets'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>Pet Haven: Seu Destino para Mimos e Cuidados Animais</h2>
            <p>Descubra o paraíso dos animais de estimação no Pet Haven, onde cada peludo é tratado com amor e atenção. Oferecemos uma ampla gama de serviços de cuidados e produtos de qualidade para garantir o bem-estar e felicidade do seu companheiro peludo!</p>
            <div className="hero-btn">
                <button>Fale Conosco</button>
                <button>Nossos Serviços</button>
            </div>
        </div>
        <div className="hero-right">
            <img src={assets.imagem_home} alt="Imagem de um cachorro" />
        </div>
    </div>
  )
}

export default Hero