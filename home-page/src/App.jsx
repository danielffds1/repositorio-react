import './App.css';
import Contatos from './components/Contatos/Contatos';
import Experiencia from './components/Experiencia/Experiencia';
import Footer from './components/Footer/Footer';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Header />
      <div>
        <Home />
        <Skills />
        <Experiencia />
        <Projects />
        <Contatos />
      </div>
      <Footer />
    </>
  );
}

export default App;
