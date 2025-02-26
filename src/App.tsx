import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/navbar/Navbar"
import ListarColaborador from "./components/colaboradores/listacolaborador/ListarColaborador"
import Footer from "./components/footer/Footer"
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'



function App() {

  return (
    <>

      
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[90vh] bg-indigo-800">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path="/colaboradores" element={<ListarColaborador />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
