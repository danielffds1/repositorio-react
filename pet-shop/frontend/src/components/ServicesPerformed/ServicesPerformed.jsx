import './ServicesPerformed.css'
import { assets } from '../../assets/assets'
import CountUp from 'react-countup';

const ServicesPerformed = () => {
  return (
    <div className='services-performed'>
        <div className="services-performed-container">
            <div className="services-performed-item">
                <img src={assets.icon2} alt="" />
                <CountUp end={34793} duration={5} />
                <p>Clientes Felizes</p>
            </div>
            <div className="services-performed-item">
                <img src={assets.icon5} alt="" />
                <CountUp end={45380} duration={5} />
                <p>Departamentos</p>
            </div>
            <div className="services-performed-item">
                <img src={assets.icon4} alt="" />
                <CountUp end={54762} duration={5} />
                <p>Vacinação</p>
            </div>
        </div>
    </div>
  )
}

export default ServicesPerformed