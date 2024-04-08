import './PreventiveCare.css'
import { preventiveCares } from '../../assets/data'

const PreventiveCare = () => {
    return (
        <div className='preventive-care'>
            <h2>Bem-Estar e Saúde Animal</h2>
            <p>Cuidados preventivos com seu pet são essenciais para garantir sua saúde e bem-estar a longo prazo. Desde vacinações regulares até exames veterinários periódicos, investir na prevenção é a chave para uma vida saudável e feliz para seu companheiro peludo.</p>

            <div className="preventive-care-container">
                {preventiveCares.map((item) => (
                    <div key={item.id} className="preventive-care-item">
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PreventiveCare