import Navbar from './components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import ServicesProduct from './pages/ServicesProduct/ServicesProduct'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/servicesProduct" element={<ServicesProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
