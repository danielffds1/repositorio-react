import './BuyAnimals.css'
import { buyAnimals } from '../../assets/data'

const BuyAnimals = () => {
  return (
    <div className='buy-animals'>
      <h2>Compre seu pet Aqui</h2>
      <p>Na seção Compre Seu Pet, oferecemos uma variedade de opções para encontrar o animal de estimação perfeito para você e sua família. Desde filhotes adoráveis até companheiros mais maduros em busca de um lar amoroso, estamos comprometidos em facilitar a conexão entre animais de estimação e seus novos donos. Nossa equipe está aqui para orientá-lo durante todo o processo de adoção, garantindo que você encontre um amigo peludo que se adapte ao seu estilo de vida e traga muita alegria para sua casa..</p>

      <div className="buy-animals-container">
        {buyAnimals.map((item) => (
          <div key={item.id}>
            <div  className="buy-animals-item">
              <img src={item.image} alt={item.title} />
              <div className="buy-animals-price">
                <div className="buy-animals-price-old">
                  {item.newPrice}
                </div>
                <div className="buy-animals-price-new">
                  {item.oldPrice}
                </div>
              </div>
              <button>Comprar</button>
            </div>
          </div >
        ))}
      </div>
    </div>
  )
}

export default BuyAnimals