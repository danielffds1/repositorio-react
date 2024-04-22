import './About.css'

const About = () => {
  return (
    <div className='about-content'>
      <h2>PetShop Online</h2>
      <p>Bem-vindo ao PetShop Online, onde a prática das mais recentes tecnologias Front-end e Back-end é nossa prioridade.</p>

      <h3>Tecnologias Utilizadas</h3>
      <ul>
        <li><strong>Front-end com React:</strong> Utilizamos React para desenvolver uma interface responsiva e interativa, aproveitando os Hooks e o React Context para uma experiência de usuário excepcional.</li>
        <li><strong>Back-end com Node.js e MongoDB:</strong> Contamos com o poder do Node.js para criar um servidor robusto e escalável. Além disso, nossos dados são armazenados no MongoDB, garantindo flexibilidade e desempenho.</li>
        <li><strong>Autenticação JWT:</strong> Implementamos autenticação JWT para garantir a segurança dos dados dos nossos clientes, proporcionando uma experiência confiável e segura.</li>
      </ul>

      <h3>Referência ao Freepik</h3>
      <p>As imagens e o layout do nosso site foram gentilmente fornecidos pelo Freepik, uma plataforma líder em recursos gráficos de alta qualidade. Agradecemos ao Freepik por contribuir para tornar nosso site visualmente atraente e profissional.</p>
      <a href="https://br.freepik.com/psd-gratuitas/conceito-de-paginas-de-destino-veterinarias_7033095.htm#fromView=search&page=1&position=15&uuid=725cceab-2721-47e3-956a-8922097f63e5">Designed by Freepik</a>

      <h3>Propósito de Aprendizado</h3>
      <p>No PetShop Online, valorizamos o aprendizado contínuo e o aprimoramento de nossas habilidades técnicas. Utilizando tecnologias modernas como React, Node.js e MongoDB, estamos constantemente expandindo nosso conhecimento e buscando maneiras de melhorar nossos serviços.</p>
      <p>Obrigado por escolher o PetShop Online. Estamos comprometidos em oferecer a melhor experiência possível para você e seus animais de estimação!</p>
    </div>

  )
}

export default About