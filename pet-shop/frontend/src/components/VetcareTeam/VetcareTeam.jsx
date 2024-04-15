import './VetcareTeam.css'
import { assets } from '../../assets/assets'
const VetcareTeam = () => {
  return (
    <div className='vetcare-team'>
        <h2>Time de Veterinários</h2>
        <p>Conheça nosso time veterinário dedicado e experiente, pronto para cuidar do seu pet com amor e profissionalismo. Com uma equipe comprometida com a saúde e bem-estar dos animais, estamos aqui para oferecer o melhor atendimento e orientação para você e seu companheiro peludo. Conte conosco para fornecer cuidados veterinários de qualidade e garantir uma vida longa e feliz para seu amado pet.</p>
        <div className="vetcare-team-container">
            <div className='vetcare-team-item'>
                <img src={assets.profissionais1} alt="Veterinário 1" />
                <h3>Dra. Paula</h3>
                <p>Clínico Geral</p>
            </div>
            <div className='vetcare-team-item'>
                <img src={assets.profissionais2} alt="Veterinário 2" />
                <h3>Dra. Maria</h3>
                <p>Ortopedista</p>
            </div>
            <div className='vetcare-team-item'>
                <img src={assets.profissionais3} alt="Veterinário 3" />
                <h3>Dra. Giovanna</h3>
                <p>Oftalmologista</p>
            </div>
        </div>
    </div>
  )
}

export default VetcareTeam