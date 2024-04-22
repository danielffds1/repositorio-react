import './ServiceCard.css'


const ServiceCard = ({ id, image,  title, description, price }) => {
  return (
    <div className="service-card-item">
        <div className="service-card-img-container">
            <img className='service-item-img' src={image} alt="" />
        </div>
        <div className="service-card-item-info">
            <div className="service-card-item-desc">
                <h3>{title}</h3>
                <p>{description}</p>
                <p className="service-card-item-price">
                    <strong>Preço:</strong> ${price}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard