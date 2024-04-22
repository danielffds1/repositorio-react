import ServiceCard from '../../components/ServiceCard/ServiceCard'
import './ServicesProduct.css'
import { availableServices } from '../../assets/data';

const ServicesProduct = () => {
  return (
    <div className='services-content'>
      <h1>Produtos e Serviços</h1>
      <p>Conheça nossos produtos e serviços de alta qualidade para atender às necessidades do seu animal de estimação.</p>
      <div className="services-content-card">
        {availableServices.map((service, index) => (
          <ServiceCard
          key={index}
          image={service.image}
          title={service.title}
          description={service.description}
          price={service.price}
          />
        ))}
      </div>
    </div>
  )
}

export default ServicesProduct